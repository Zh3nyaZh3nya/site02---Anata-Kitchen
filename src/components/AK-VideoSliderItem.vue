<template>
    <div class="slider__video__body">
        <img :src="require('@/assets/mainImg/sliderVideo/' + sliderVideoItem_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'VVideoSliderItem',
    props: {
        sliderVideoItem_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
.slider__video__body img{
    margin-right: 20px;
}
@media(max-width: 1360px) {
    .slider__video__body img{
        width: 300px;
    }
    .slider__video__body img:first-child {
        margin-left: 3px;
    }
    .slider__video__body:nth-child(odd) {
        display: none;
    }
    .slider__video__body:nth-child(4) {
        display: none;
    }
}
@media(max-width: 960px) {
    .slider__video__body img{
        width: 400px;
    }
    .slider__video__body:nth-child(odd) {
        display: block;
    }
}

@media(max-width: 840px) {
    .slider__video__body img{
        width: 496px;
    }
    .slider__video__body img{
        margin-right: 0px;
    }
}
@media(max-width: 540px) {
    .slider__video__body img{
        width: 356px;
    }
    .slider__video__body img{
        margin-right: 0px;
    }
}
</style>