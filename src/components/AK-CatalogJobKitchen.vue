<template>
    <section class="catalog__kitchen">
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

                />
            </transition-group>
        </div>
        <v-button>
            <span>Показать еще</span>
        </v-button>
    </section>
</template>

<script>
    import VCatalogJobItem from '@/components/AK-CatalogJobItem.vue';
    import VSelect from '@/components/UI/AK-Select.vue'
    import VButton from '@/components/UI/AK-Button.vue';
    import VPagination from '@/components/UI/AK-Pagination.vue';
    import VItemPage from '@/components/AK-PageItem.vue';
    export default {
        components: {
            VCatalogJobItem, VSelect, VButton, VPagination, VItemPage
        },
        data() {
            return {
                kitchenItem: [
                    {
                        article: 1,
                        Images: {
                            img: '1.png', img2: '2.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Маттео',
                        subtitle: 'Массив дуба', subtitle2: 'Фрезеровка', subtitle3: '7,2 м.п.',
                        price: '125 000 ₽', discount: '147 000 ₽',

                        selectTitle3: 'Кухня Маттео', selectPrice1: '125 000 ₽', selectFasade3: 'Массив дуба', selectSize7: '7,2 м.п.',

                        
                    }, 
                    {
                        article: 2,
                        Images: {
                            img: '2.png', img2: '1.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от клиента',
                        title: 'Кухня Integrato',
                        subtitle: 'Cleaf + Эмаль', subtitle2: 'Система без ручек', subtitle3: '4,2 м.п.',
                        price: '180 000 ₽', discount: '220 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice2: '180 000 ₽', selectFasade2: 'Cleaf + Эмаль', selectSize4: '4,2 м.п.'
                    },                    
                    {
                        article: 3,
                        Images: {
                            img: '3.png', img2: '4.png', img3: '2.png', img4: '1.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'МДФ', subtitle2: 'Система без ручек', subtitle3: 'Небольшие кухни',
                        price: '270 000 ₽', discount: '357 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice3: '270 000 ₽', selectFasade1: 'МДФ', selectSizeSmall: 'Небольшие кухни'
                    },
                    {
                        article: 4,
                        Images: {
                            img: '4.png', img2: '3.png', img3: '4.png', img4: '2.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'Дуб', subtitle2: 'Система без ручек', subtitle3: 'Небольшие кухни',
                        price: '230 000 ₽', discount: '280 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice4: '230 000 ₽', selectFasade4: 'Дуб', selectSizeSmall: 'Небольшие кухни'
                    },{
                        article: 5,
                        Images: {
                            img: '1.png', img2: '2.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Teramo',
                        subtitle: 'Массив дуба', subtitle2: 'Фрезеровка', subtitle3: 'Небольшие кухни',
                        price: '125 000 ₽', discount: '147 000 ₽',

                        selectTitle1: 'Кухня Teramo', selectPrice1: '125 000 ₽',  selectFasade3: 'Массив дуба', selectSizeSmall: 'Небольшие кухни'
                    }, 
                    {
                        article: 6,
                        Images: {
                            img: '2.png', img2: '1.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от клиента',
                        title: 'Кухня Integrato',
                        subtitle: 'Cleaf + Эмаль', subtitle2: 'Система без ручек', subtitle3: '12 м.п.',
                        price: '180 000 ₽', discount: '220 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice2: '180 000 ₽', selectFasade2: 'Cleaf + Эмаль', selectSize12: '12 м.п.'
                    },                    
                    {
                        article: 7,
                        Images: {
                            img: '3.png', img2: '4.png', img3: '2.png', img4: '1.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'МДФ', subtitle2: 'Система без ручек', subtitle3: '5.2 м.п.',
                        price: '270 000 ₽', discount: '357 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice3: '270 000 ₽', selectFasade1: 'МДФ',  selectSize5: '5,2 м.п.'
                    },
                    {
                        article: 8,
                        Images: {
                            img: '4.png', img2: '3.png', img3: '4.png', img4: '2.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'Дуб', subtitle2: 'Система без ручек', subtitle3: '14 м.п.',
                        price: '230 000 ₽', discount: '280 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice4: '230 000 ₽', selectFasade4: 'Дуб', selectSize14: '14 м.п.'
                    },{
                        article: 9,
                        Images: {
                            img: '1.png', img2: '2.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Teramo',
                        subtitle: 'Массив дуба', subtitle2: 'Фрезеровка', subtitle3: '7,2 м.п.',
                        price: '125 000 ₽', discount: '147 000 ₽',

                        selectTitle1: 'Кухня Teramo', selectPrice1: '125 000 ₽',  selectFasade3: 'Массив дуба', selectSize7: '7,2 м.п.'
                    }, 
                    {
                        article: 10,
                        Images: {
                            img: '2.png', img2: '1.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от клиента',
                        title: 'Кухня Integrato',
                        subtitle: 'Cleaf + Эмаль', subtitle2: 'Система без ручек', subtitle3: '4,2 м.п.',
                        price: '180 000 ₽', discount: '220 000 ₽',

                        selectTitle2: 'Кухня Integrato', selectPrice2: '180 000 ₽', selectFasade2: 'Cleaf + Эмаль', selectSize4: '4,2 м.п.'
                    },                    
                    {
                        article: 11,
                        Images: {
                            img: '3.png', img2: '4.png', img3: '2.png', img4: '1.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'МДФ', subtitle2: 'Система без ручек', subtitle3: '10 м.п.',
                        price: '270 000 ₽', discount: '357 000 ₽',

                        selectPrice3: '270 000 ₽', selectFasade1: 'МДФ', selectSize10: '10 м.п.', selectTitle2: 'Кухня Integrato'
                    },
                    {
                        article: 12,
                        Images: {
                            img: '4.png', img2: '3.png', img3: '4.png', img4: '2.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'Дуб', subtitle2: 'Система без ручек', subtitle3: '5,2 м.п.',
                        price: '230 000 ₽', discount: '280 000 ₽', 

                        selectFasade4: 'Дуб', selectSize5: '5,2 м.п.', selectTitle2: 'Кухня Integrato', selectPrice4: '230 000 ₽'
                    }
                ],
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

            }

        },
        methods: {
            itemClick(article) {
                this.$router.push( {name: 'KitchenName',query: { 'kitchen': article } } )
            }
        },
        watch: {
            selectedSort(newValue) {
                this.kitchenItem.sort((card1, card2) => {
                    return card1[this.selectedSort]?.localeCompare(card2[this.selectedSort])
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