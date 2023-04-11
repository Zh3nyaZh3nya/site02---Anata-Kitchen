<template>
    <section class="main__catalog">

        <AKAlert
            :messages="messages"
            :timeout="3000"
        />

        <div class="main__catalog__sliders-title">
                <span>Живые фотографии наших работ от реальных клиентов 🥰</span>
        </div>
        <div class="main__catalog__sliders">
            
            <VCatalogJobItem
                v-for="catalogSliderItem in catalogJobItem"
                :key="catalogSliderItem.article"
                :catalogSliderItem_data="catalogSliderItem"
                @itemClick="itemClick"
                @addToCart="addToCart"
            />

        </div>
        <v-button @click="goToTheCatalogPage">
            <span>Смотреть все работы</span>
        </v-button>
    </section>
</template>

<script>
    import VCatalogJobItem from '@/components/AK-CatalogJobItem.vue';
    import VButton from '@/components/UI/AK-Button.vue';
    import AKAlert from './UI/AK-Alert.vue';
    import { mapActions, mapState } from 'vuex';
    
    export default {
        components: {
            VCatalogJobItem, VButton, AKAlert
        },
        data() {
            return {
                messages: []
            }
        },
        methods: {
            ...mapActions([
                'ADD_TO_CART' // функция добавления карточки
            ]),
            goToTheCatalogPage() {
                this.$router.push('/KitchenName')
            },
            itemClick(article) {
                this.$router.push( {name: 'KitchenName',query: { 'kitchen': article } } )
            },
            addToCart(data) {
                this.ADD_TO_CART(data) // само добавление карточки
                .then(() => {
                    this.messages.unshift( {name: 'Кухня добавлена', icon:' check', id: Date.now().toLocaleString}  ) // 
                })
            }
        },
        computed: {
            ...mapState('kitchenItem', ['catalogJobItem'])
        }

    }
</script>

<style>
.main__catalog {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
.main__catalog__sliders {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
}
.main__catalog__sliders-title {
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 60px;
}

@media(max-width: 1124px) {
    .main__catalog__sliders {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 60px;
    }
}
@media(max-width: 792px) {
    .main__catalog__sliders-title {
        font-size: 24px;
    }
}
</style>