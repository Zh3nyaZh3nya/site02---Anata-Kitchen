<template>
    <div class="job__item__slider" >

        <div class="job__item__slider__body">

            <button class="catalog-next-btn" @click="nextImg">
                <img src="@/assets/UI/right.svg" alt="">
            </button>

            <button class="catalog-prev-btn" @click="prevImg">
                <img src="@/assets/UI/left.svg" alt="">
            </button>

            <div class="job__item__slider__line" :style = " { 'margin-left': '-' + (100 * catalogIndexItem) + '%'} ">
            
                <div class="job__item__slider__body__img">
                    <div class="job__item__slider__body__img__main">

                        <img v-for="image in catalogSliderItem_data.Images" :src="require('@/assets/mainImg/sliderCatalog/' + image)" alt="">
                        
                    </div>
                </div>

            </div>

            <div class="job__item__slider__body__img__btn">

                <button class="job__item__slider__body__img__btn-youtube">
                    <img :src="require('@/assets/mainImg/sliderCatalog/' + catalogSliderItem_data.youtube)" alt="">
                    <span>Видеообзор</span>
                </button>

                <button class="job__item__slider__body__img__btn-user">
                    <img :src="require('@/assets/mainImg/sliderCatalog/' + catalogSliderItem_data.user)" alt="">
                    <span>Видеоотзыв</span>
                </button>

                <button class="job__item__slider__body__img__btn-like" @click="addToCart">
                    <img :src="require('@/assets/mainImg/sliderCatalog/' + catalogSliderItem_data.heart)" alt="">
                </button>

                <div class="job__item__slider__body__img__subtitle">
                    <span>{{ catalogSliderItem_data.message }}</span>
                </div>

            </div>

        </div>

        <div class="job__item__slider__body__info">

            <div class="job__item__slider__body__info-title">
                <span>{{ catalogSliderItem_data.title }}</span>
            </div>

            <div class="job__item__slider__body__info-subtitle">
                <span>{{ catalogSliderItem_data.subtitle }}</span><img src="@/assets/mainImg/sliderCatalog/icon1.svg" alt="">
                <span>{{ catalogSliderItem_data.subtitle2 }}</span><img src="@/assets/mainImg/sliderCatalog/icon1.svg" alt="">
                <span>{{ catalogSliderItem_data.subtitle3 }}</span><img src="@/assets/mainImg/sliderCatalog/icon1.svg" alt="">
            </div>

            <div class="job__item__slider__body__info-footer">
                <div class="job__item__slider__body__info-price">
                    <span>{{ catalogSliderItem_data.price }}</span>
                    <span>{{ catalogSliderItem_data.discount }}</span>
                </div>
                <v-button class="catalog--btn" @click="itemClick" > 
                    <span>Рассчитать эту кухню</span>
                </v-button>
            </div>
        </div>
    </div>
</template>

<script>
    import VButton from '@/components/UI/AK-Button.vue'

    export default {
        components: {   VButton   },
        
        props: {
            catalogSliderItem_data: {
                type: Object,
                default: () => {}
            },     
        },
        data() {
            return {
                catalogIndexItem: 0
            }
        },
        methods: {  
            prevImg() {
                if(this.catalogIndexItem > 0) {
                    this.catalogIndexItem--
                } else if(this.catalogIndexItem == 0) {
                    this.catalogIndexItem = Object.keys(this.catalogSliderItem_data.Images).length - 1
                }
            },
            nextImg() {
                if(this.catalogIndexItem >= Object.keys(this.catalogSliderItem_data.Images).length - 1) {
                    this.catalogIndexItem = 0

                } else {
                    this.catalogIndexItem++

                }
            },
            itemClick() {
                this.$emit('itemClick', this.catalogSliderItem_data.article)
            },
            addToCart() {
                this.$emit('addToCart',this.catalogSliderItem_data)
            }
        },


    }
</script>

<style>

.job__item__slider {  
    max-width: 650px;
    width: 100%;
    overflow: hidden;

}

.job__item__slider__line {
    transition: all ease .7s;
}

.catalog-next-btn {
    z-index: 5;
    position: absolute;
    top: 40%;
    right: 0;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 14px 20px;
    border-radius: 8px 0px 0px 8px;
}

.catalog-prev-btn {
    padding: 14px 17px;
    z-index: 5;
    position: absolute;
    top: 40%;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 0px 8px 8px 0px;
}

.job__item__slider__body {
    position: relative;
}

.job__item__slider__body__img {
    position: relative;
}
.job__item__slider__body__img__main {
    display: flex;
}

.job__item__slider__body__img__btn {
    position: absolute;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    margin-left: 20px;
    bottom: 20px;
}

.job__item__slider__body__img__btn-youtube {
    display:flex;
    column-gap: 15px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 11px 20px;
    border-radius: 8px;

}
.job__item__slider__body__img__btn-youtube span {
    padding-top: 5px ;
}

.job__item__slider__body__img__btn-user {
    display:flex;
    column-gap: 15px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 11px 20px;
    border-radius: 8px;
}

.job__item__slider__body__img__btn-user span{
    padding-top: 5px;
}

.job__item__slider__body__img__btn-like {
    display:flex;
    column-gap: 15px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    padding: 11px 20px;
    border-radius: 8px;
}

.job__item__slider__body__img__subtitle {
    margin: 25px 0 0 25px;
    color: #fff;
}

.job__item__slider__body__info {
    margin: 20px 0 26px 20px;
}

.job__item__slider__body__info-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 16px;
    text-align: start;
}

.job__item__slider__body__info-subtitle {
    font-size: 14px;
    line-height: 150%;
    color: #878B90;
    display: flex;
    column-gap: 25px;
    margin-bottom: 25px;
}

.job__item__slider__body__info-footer {
    font-weight: 600;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
}
.job__item__slider__body__info-price span:nth-child(2) {
    font-size: 16px;
    margin-left: 30px;
    text-decoration-line: line-through;
    color: #878B90;
}
.catalog--btn {
    width: 250px;
}
@media(max-width: 1360px) {
    .job__item__slider{
        max-width: 600px;
        margin: 0 auto;
    }
    .job__item__slider__body__img__main img {
        max-width: 600px;
    }
    .job__item__slider__body__img__btn button {
        height: 50px;
    }
}
@media(max-width: 1240px) {
    .job__item__slider{
        max-width: 550px;
        margin: 0 auto;
    }
    .job__item__slider__body__img__main img {
        max-width: 550px;
    }
}
@media(max-width: 1124px) {
    .job__item__slider{
        max-width: 650px;
        margin: 0 auto;
    }
    .job__item__slider__body__img__main img {
        max-width: 650px;
    }
}
@media(max-width: 792px) {
    .job__item__slider{
        max-width: 550px;
        margin: 0 auto;
    }
    .job__item__slider__body__img__main img {
        max-width: 550px;
    }
    .job__item__slider__body__img__subtitle {
        display: none;
    }
    .job__item__slider__body__info-title {
        font-size: 18px;
    }
    .job__item__slider__body__info-subtitle {
        font-size: 15px;
    }

}
@media(max-width: 540px) {
    .job__item__slider{
        max-width: 330px;
        margin: 0 auto;
    }
    .job__item__slider__body__img__main img {
        max-width: 330px;
    }
    .job__item__slider__body__img__btn {
        bottom: 10px;
        margin-left: 5px;
    }
    .job__item__slider__body__img__btn button {
        height: 35px;
    }
    .job__item__slider__body__img__btn-youtube ,
    .job__item__slider__body__img__btn-like,
    .job__item__slider__body__img__btn-user {
        padding: 5px 5px;
    }
    .job__item__slider__body__info {
        margin: 15px 0;
    }
    .job__item__slider__body__info-subtitle {
        column-gap: 0px;
        justify-content: space-between;
    }
    .job__item__slider__body__info-subtitle img {
        display: none;
    }
    .job__item__slider__body__info-footer {
        display: grid;
        grid-template-columns: 1fr;
    }
    .catalog--btn {
        margin-top: 15px;
        width: 330px;
    }
    .catalog-next-btn,
    .catalog-prev-btn {
        top: 30%;
    }
}
</style>