<template>
    <section class="catalog__kitchen">

        <AKAlert 
            :messages="messages"
            :timeout="3000"
        />

        <div class="catalog__kitchen-title">
            <span>Наши кухни</span>
        </div>
        <div class="catalog__kitchen-modalwindow">
            <VSelect
                v-for="item in selectItem"
                :key="item.id"
                :selectItems="item"
                v-model="selectedSort"
            />
        </div>
        <div class="catalog__kitchen-item">
            <transition-group name="item-list">
                <VCatalogJobItem 
                    v-for="KitchenItem in kitchenItem"
                    :key="KitchenItem.article"
                    :catalogSliderItem_data="KitchenItem"
                    @itemClick="itemClick"
                    @addToCart="addToCart"
                />
            </transition-group>
        </div>
        <v-button>
            <span>Показать еще</span>
        </v-button>
    </section>
</template>

<script>
    import AKAlert from './UI/AK-Alert.vue';
    import VCatalogJobItem from '@/components/AK-CatalogJobItem.vue';
    import VSelect from '@/components/UI/AK-Select.vue'
    import VButton from '@/components/UI/AK-Button.vue';
    import VPagination from '@/components/UI/AK-Pagination.vue';
    import { mapActions, mapState } from 'vuex';
    export default {
        components: {
            VCatalogJobItem, VSelect, VButton, VPagination, AKAlert
        },
        data() {
            return {
                selectItem: [
                    { 
                        id: 1, nameSelect: 'Кухни', selectOptions: [
                            {   value: 'selectTitle1', name: 'Кухня Teramo'    },
                            {   value: 'selectTitle2', name: 'Кухня Integrato' },
                            {   value: 'selectTitle3', name: 'Кухня Маттео'    }
                        ]
                    },
                    {
                        id: 2, nameSelect: 'Фасад', selectOptions: [
                            {   value: 'selectFasade1', name: 'МДФ'            },
                            {   value: 'selectFasade2', name: 'Cleaf + Эмаль'  },
                            {   value: 'selectFasade3', name: 'Массив дуба'    },
                            {   value: 'selectFasade4', name: 'Дуб'            },
                        ]
                    },
                    {
                        id: 3, nameSelect: 'Размер', selectOptions: [
                            {   value:'selectSizeSmall', name: 'Небольшие кухни'   },                            
                            {   value:'selectSize4',     name: 'Кухни 4.2 метра'   },
                            {   value:'selectSize5',     name: 'Кухни 5.2 метра'   },
                            {   value:'selectSize7',     name: 'Кухни 7.2 метра'   },
                            {   value:'selectSize10',    name: 'Кухни 10 метра'    },
                            {   value:'selectSize12',    name: 'Кухни 12 метра'    },
                            {   value:'selectSize14',    name: 'Кухни 14 метра'    }
                        ]
                    },
                    {   
                        id: 4, nameSelect: 'Цена', selectOptions: [
                            {   value: 'selectPrice1', name: '125 000 ₽'    },
                            {   value: 'selectPrice2', name: '180 000 ₽'    },
                            {   value: 'selectPrice3', name: '270 000 ₽'    },
                            {   value: 'selectPrice4', name: '230 000 ₽'    }
                        ]   
                    },
                    
                    
                ],
                selectedSort: '',
                messages: []
            }

        },
        methods: {
            ...mapActions([
                'ADD_TO_CART'
            ]),
            itemClick(article) {
                this.$router.push( {name: 'KitchenName',query: { 'kitchen': article } } )
            },
            addToCart(data) {
                this.ADD_TO_CART(data) // добавление карточек в корзину
                .then(() => {
                    this.messages.unshift( {name: 'Кухня добавлена', icon:' check', id: Date.now().toLocaleString}  ) // 
                })
            }
        },
        computed: {
            ...mapState('kitchenItem', ['kitchenItem'])
        },
        watch: {
            selectedSort(newValue) {
                this.kitchenItem.sort((card1, card2) => {
                    return card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]) // сортировка карточек
                })
            }
        }
    }
</script>

<style>
.catalog__kitchen {
    text-align: center;
}
.catalog__kitchen-title {
    text-align: start;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 50px;
}
.catalog__kitchen-modalwindow {
    display: flex;
    margin-bottom: 60px;
}
.catalog__kitchen-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
}

.item-list-move {
  transition: all ease 0.4s;
}

@media(max-width: 1240px) {
    .catalog__kitchen-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        margin-bottom: 60px;
    }
}

@media(max-width: 1124px) {
    .catalog__kitchen-item {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 60px;
    }
}

@media(max-width: 792px) {
    .catalog__kitchen-modalwindow {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 30px;
    }
}


</style>