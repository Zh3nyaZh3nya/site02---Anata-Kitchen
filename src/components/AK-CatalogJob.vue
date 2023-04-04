<template>
    <section class="main__catalog">
        <div class="main__catalog__sliders-title">
                <span>Живые фотографии наших работ от реальных клиентов 🥰</span>
        </div>
        <div class="main__catalog__sliders">
            
            <VCatalogJobItem
                v-for="catalogSliderItem in catalogJobItem"
                :key="catalogSliderItem.article"
                :catalogSliderItem_data="catalogSliderItem"
                @itemClick="itemClick"

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
    
    export default {
        components: {
            VCatalogJobItem, VButton
        },
        data() {
            return {
                catalogJobItem: [
                    {
                        article: 1,
                        Images: {
                            img: '1.png', img2: '2.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Teramo',
                        subtitle: 'Массив дуба', subtitle2: 'Фрезеровка', subtitle3: '7,2 м.п.',
                        price: '125 000 ₽', discount: '147 000 ₽'
                    }, 
                    {
                        article: 2,
                        Images: {
                            img: '2.png', img2: '1.png', img3: '3.png', img4: '4.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от клиента',
                        title: 'Кухня Integrato',
                        subtitle: 'Cleaf + Эмаль', subtitle2: 'Система без ручек', subtitle3: '4,2 м.п.',
                        price: '180 000 ₽', discount: '220 000 ₽'
                    },                    
                    {
                        article: 3,
                        Images: {
                            img: '3.png', img2: '4.png', img3: '2.png', img4: '1.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'Массив дуба', subtitle2: 'Система без ручек', subtitle3: '7,2 м.п.',
                        price: '270 000 ₽', discount: '357 000 ₽'
                    },
                    {
                        article: 4,
                        Images: {
                            img: '4.png', img2: '3.png', img3: '4.png', img4: '2.png',
                        },
                        youtube: 'youtube.svg', user: 'user.svg', heart: 'heart.svg', message: '* Фото от сборщика',
                        title: 'Кухня Integrato',
                        subtitle: 'Массив дуба', subtitle2: 'Система без ручек', subtitle3: '7,2 м.п.',
                        price: '230 000 ₽', discount: '280 000 ₽'
                    }
                ]
            }
        },
        methods: {
            goToTheCatalogPage() {
                this.$router.push('/KitchenName')
            },
            itemClick(article) {
                this.$router.push( {name: 'KitchenName',query: { 'kitchen': article } } )
            }
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