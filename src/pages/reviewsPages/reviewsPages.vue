<template>
    <VHeader></VHeader>
    <div class='reviewsPage'>
        <h2>Отзывы</h2>
        <div class="reviewPage">
            <div class="reviewItem">
                <VReviewsItem 
                    v-for="reviewItem in reviewsItem"
                    :key="reviewItem.id"
                    :reviewItem_data="reviewItem"
                />
            </div>
            <div class="myComment">
                <VMyComment />
            </div>  

        </div>
    </div>
    <VFooter></VFooter>
</template>

<script>
    import VHeader from '@/components/AK-Header.vue';
    import VFooter from '@/components/AK-Footer.vue';
    import VReviewsItem from '@/pages/reviewsPages/AK-ReviewsItem.vue';
    import VMyComment from '@/components/UI/AK-MyComment.vue';
    export default {
        components: {
            VHeader, VFooter, VReviewsItem, VMyComment, 
        },
        data() {
            return {
                reviewsItem: [
                    {
                        id: 1,
                        name: 'Надежда',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowStar.svg'
                        },
                        message: 'Очень симпатичный комплект мебели. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 3.png', img2: 'image 4.png', img3: 'image 5.png'
                        },
                        dateNumber: '21 ', dateMonth: 'сентябрь'
                    },
                    {
                        id: 2,
                        name: 'Ольга',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowGray.svg'
                        },
                        message: 'Кухня супер, качественно собрано. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 1.png', img2: 'image 1.png'
                        },
                        dateNumber: '17 ', dateMonth: 'сентябрь'
                    },                    
                    {
                        id: 3,
                        name: 'Анастасия',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowStar.svg'
                        },
                        message: 'Очень симпатичный комплект мебели. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 6.png', img2: 'image 7.png', img3: 'image 8.png'
                        },
                        dateNumber: '16 ', dateMonth: 'сентябрь'
                    },
                    {
                        id: 4,
                        name: 'Надежда',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowStar.svg'
                        },
                        message: 'Очень симпатичный комплект мебели. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 3.png', img2: 'image 4.png', img3: 'image 5.png'
                        },
                        dateNumber: '21 ', dateMonth: 'сентябрь'
                    },
                    {
                        id: 5,
                        name: 'Ольга',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowGray.svg'
                        },
                        message: 'Кухня супер, качественно собрано. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 1.png', img2: 'image 1.png'
                        },
                        dateNumber: '17 ', dateMonth: 'сентябрь'
                    },       
                    {
                        id: 6,
                        name: 'Анастасия',
                        star: {
                            star1: 'YellowStar.svg', star2: 'YellowStar.svg', star3: 'YellowStar.svg', star4: 'YellowStar.svg', star5: 'YellowStar.svg'
                        },
                        message: 'Очень симпатичный комплект мебели. Доставка пришла в срок. Собирали самостоятельно, все интуитивно просто. Благодарю.',
                        reviewsImg: {
                            img1: 'image 6.png', img2: 'image 7.png', img3: 'image 8.png'
                        },
                        dateNumber: '16 ', dateMonth: 'сентябрь'
                    },
                ],

            }
        }
    }
</script>

<style lang="scss" scoped>
.reviewsPage {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;

}
.reviewsPage h2 {
    margin-top: 60px;
    margin-bottom: 60px;
}

.reviewPage {
    display: grid;
    grid-template-columns: 3fr 1fr;
}
@media(max-width: 1360px) {
    .reviewsPage {
        max-width: 1240px;
    }

}
@media(max-width: 1240px) {
    .reviewsPage {
        max-width: 1024px;

    }
    .reviewPage {
        display: grid;
        grid-template-columns: 1fr;   
    }
    .myComment {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4;
    }
}
@media(max-width: 1024px) {
    .reviewsPage {
        max-width: 702px;
    }
}
@media(max-width: 792px) {
    .reviewsPage {
        max-width: 540px;
    }
}
@media(max-width: 540px) {
    .reviewsPage {
        max-width: 360px;
    }
}

</style>