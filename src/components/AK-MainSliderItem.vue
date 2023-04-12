<template>

    <div class="main__slider__body">
        <div class="main__slider__body-img">
            <div class="main__slider__body-img-main">
                <img :src=" require('@/assets/mainImg/' + sliderItem_data.img) "  alt="">
            </div>
            <div class="main__slider__body-img-razrez">
                <img :src=" require('@/assets/mainImg/' + sliderItem_data.img2) " alt="">
            </div>
        </div>
        <div class="main__slider__body__info">
            <div class="asd">
                <div class="main__slider__body__info-title">
                    <p>{{ sliderItem_data.title }}</p>
                </div>
                <div class="main__slider__body__info-price">
                    <p>{{ sliderItem_data.price }}</p>
                </div>
                <div class="main__slider__body__info-subtitle">
                    <p>{{ sliderItem_data.subtitle }}</p>
                </div>
            </div>
            <div class="rsd">
            <button class="main__slider__body__info-btn">
                
                    <span>Выбрать</span>
                
            </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'VMainSliderItem',

        props: {
            sliderItem_data: {
                type: Object,
                default: () => {}
            },
        }
    }
</script>

<style>
.main__slider__body {
    display: flex;
    position: relative;
}
.main__slider__body-img {
    position: relative;
    z-index: 1;
}

.main__slider__body-img-razrez {
    position: absolute;
    top: 0px;
    right: 0;
}
.main__slider__body__info {
    background: #B17955;
    color: #fff;
    font-weight: 500;
    min-width: 490px;
    padding-left: 40px;
}
.main__slider__body__info-title {
    margin-top: 140px;
    font-size: 32px;
    line-height: 39px;
}
.main__slider__body__info-price {
    font-weight: 800;
    font-size: 130px;
    line-height: 158px;
}
.main__slider__body__info-subtitle {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 105px;
}
.main__slider__body__info-btn {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 13px 40px;
    width: fit-content;
}
.main__slider__body__info-btn span {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
}

@media(max-width: 1360px) {
    .main__slider__body,
    .main__slider__body img{
        height: 500px;
    }
    .main__slider__body__info-title {
        margin-top: 120px;
        font-size: 28px;
    }
    .main__slider__body__info-price {
        font-size: 117px;
    }
    .main__slider__body__info-subtitle {
        font-size: 19px;
        margin-bottom: 80px;
    }
}
@media(max-width: 1240px) {
    .main__slider__body,
    .main__slider__body img{
        height: 450px;
    }
    .main__slider__body-img {
        position: relative;
    }

    .main__slider__body__info {
        padding-left: 30px;
    }
    .main__slider__body__info-title {
        margin-top: 70px;
        font-size: 24px;
    }
    .main__slider__body__info-price {
        font-size: 104px;
    }
    .main__slider__body__info-subtitle {
        font-size: 17px;
    }
    .main__slider__body__info{
        min-width: 348px;
    }
}
@media(max-width: 1024px) {
    .main__slider__body,
    .main__slider__body img {
        height: 400px;
    }

    .main__slider__body-img-main img {
        max-width: 500px;
    }
    .main__slider__body__info-title {
        font-size: 16px;
    }
    .main__slider__body__info-price {
        font-size: 78px;
        line-height: 100px;
    }
    .main__slider__body__info-subtitle {
        font-size: 14px;
    }
    .main__slider__body__info{
        min-width: 268px;
    }

}

@media(max-width: 792px) {
    .main__slider__body,
    .main__slider__body-img-main img{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        height: 350px;
        min-width: 540px;
    }
    .main__slider__body-img-razrez img{
        transform: rotate(90deg);
        position: absolute;
        top: 45px;
        right: 233px;
        width: 55.17px;
        height: 560px;
    }
    .main__slider__body__info {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .main__slider__body__info-title {
        margin-top: 0;
        font-size: 16px;
    }
    .main__slider__body__info-price {
        font-size: 78px;
        line-height: 70px;
    }
    .main__slider__body__info-subtitle {
        font-size: 12px;
        margin-bottom: 10px;
    }
    .main__slider__body__info-btn {
        margin-top: 50px;
        margin-left: 50px;
    }
}

@media(max-width: 540px) {
    .main__slider__body,
    .main__slider__body-img-main img{
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        height: 240px;
        min-width: 300px;
    }
    .main__slider__body-img-razrez img{
        position: absolute;
        top: 25px;
        right: 140px;
        height: 385px;
    }
    .main__slider__body__info {
        min-width: 300px;
    }
    .main__slider__body__info-title {
        font-size: 10px;
    }
    .main__slider__body__info-price {
        font-size: 50px;
    }
    .main__slider__body__info-subtitle {
        font-size: 10px;
    }
    .main__slider__body__info-btn {
        margin-left: 0px;
    }
}


</style>