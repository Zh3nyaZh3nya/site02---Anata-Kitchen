<template>
    <section class="video__slider">
        <div class="video__slider--title">
            <span>Специально для Вас видео наших кухонь</span>
        </div>
        <div class="slider__video">
            <div class="slider__video__line" :style = " { 'margin-left': '-' + (33.3 * countSlide) + '%' } ">
                <VVideoSliderItem
                    v-for="videoItem in videoSliderItem"
                    :key="videoItem.id"
                    :sliderVideoItem_data="videoItem"
                />
            </div>
            <button class="videoSlider-btn-next" @click="nextSlideVideo">
                <img src="@/assets/UI/right.svg" alt="">
            </button>
            <button class="videoSlider-btn-prev" @click="prevSlideVideo">
                <img src="@/assets/UI/left.svg" alt="">
            </button>
        </div>
        <v-button>
            <span>Смотреть больше видео</span>
        </v-button>
    </section>
</template>

<script>
import VVideoSliderItem from './AK-VideoSliderItem'
import VButton from '@/components/UI/AK-Button.vue'
export default {
    name: 'VVideoSlider',
    components: {
        VVideoSliderItem, VButton
    },
    data() {
        return {
            videoSliderItem: [
            
                    {id: 1, img: '1.png'},
                    {id: 2, img: '2.png'},
                    {id: 3, img: '1.png'},
            
                    {id: 4, img: '2.png'},
                    {id: 5, img: '2.png'},
                    {id: 6, img: '1.png'},
                         
                    {id: 7, img: '1.png'},
                    {id: 8, img: '1.png'},
                    {id: 9, img: '2.png'},


                
            ],
            countSlide: 0,
            
        }
    },
    methods: {
        
        prevSlideVideo() {
            if(this.countSlide > 0) {
                this.countSlide -= 3
            } else if(this.countSlide == 0) {
                this.countSlide = this.videoSliderItem.length -3;
            }
        },
        nextSlideVideo() {
            if(this.countSlide >= this.videoSliderItem.length - 3) {
                this.countSlide = 0
            }else {
                this.countSlide += 3
            }
        },
    },
}
</script>

<style>
.video__slider{
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 200px;
}
.video__slider--title {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 60px;
}
.slider__video {
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 60px;
}
.slider__video__line {
    display: flex;
    transition: all ease .7s;
}
.videoSlider-btn-next {
    position: absolute;
    top: 40%;
    right: 30px;
    background: #000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.videoSlider-btn-next:hover,
.videoSlider-btn-prev:hover {
    border: 1px solid #fff;
}
.videoSlider-btn-prev {
    position: absolute;
    top: 40%;
    left: 30px;
    background: #000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.videoSlider-btn-next img,
.videoSlider-btn-prev img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7499%) hue-rotate(3deg) brightness(97%) contrast(96%);
}
@media(max-width: 1360px) {
    .video__slider{
        max-width: 950px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 200px;
    }
    .videoSlider-btn-next,
    .videoSlider-btn-prev {
        display: none;
    }
}
@media(max-width: 960px) {
    .video__slider{
        max-width: 840px;
        width: 100%;
    }
    .videoSlider-btn-next,
    .videoSlider-btn-prev {
        display: block;
    }
}

@media(max-width: 840px) {
    .video__slider{
        max-width: 500px;
        width: 100%;
        margin-bottom: 100px;
    }
}
@media(max-width: 540px) {
    .video__slider{
        max-width: 364px;
        width: 100%;
    }
    .videoSlider-btn-next,
    .videoSlider-btn-prev {
        background: none;
    }
    .videoSlider-btn-prev {
        top: 38%;
        left: 13px;
    }
    .videoSlider-btn-next {
        top: 38%;
        right: 13px;
    }
}

</style>