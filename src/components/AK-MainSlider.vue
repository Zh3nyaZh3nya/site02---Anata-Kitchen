<template>
    <section class="main__top__slider">
        <div class="main__slider" >
            <div class="main__slider__line" :style = " { 'margin-left': '-' + (100 * currentSlideIndex) + '%' } ">
                
                <VMainSliderItem
                    v-for="sliderItem in sliderTopItems"
                    :key="sliderItem.id" 
                    :sliderItem_data = 'sliderItem'
                />

            </div>
            <button class="btn-next" @click="nextSlide">
                <img src="@/assets/UI/right.svg" alt="">
            </button>
            <button class="btn-prev" @click="prevSlide">
                <img src="@/assets/UI/left.svg" alt="">
            </button>
        </div>
    </section>
</template>

<script>
    import VMainSliderItem from './AK-MainSliderItem'

    export default {
        name: 'VMainSlider',
        components: {   VMainSliderItem   },

        data() {
            return {
                sliderTopItems: [
                    {id: 1, img: '1.png', img2: 'razrez.png', title: 'Кухни от производителя', price: '-40%', subtitle: 'На коллекции кухонь'},
                    {id: 2, img: '1.png', img2: 'razrez.png', title: 'Кухни от производителя', price: '-20%', subtitle: 'На коллекции кухонь'},
                    {id: 3, img: '1.png', img2: 'razrez.png', title: 'Кухни от производителя', price: '-60%', subtitle: 'На коллекции кухонь'},
                    {id: 4, img: '1.png', img2: 'razrez.png', title: 'Кухни от производителя', price: '-60%', subtitle: 'На коллекции кухонь'},
                    {id: 5, img: '1.png', img2: 'razrez.png', title: 'Кухни от производителя', price: '-60%', subtitle: 'На коллекции кухонь'}
                ],
                currentSlideIndex: 0
            }
        },
        methods: {
            prevSlide() {
                if(this.currentSlideIndex > 0) {

                    this.currentSlideIndex--

                } else if (this.currentSlideIndex === 0) {

                    this.currentSlideIndex = this.sliderTopItems.length - 1

                }
            },
            nextSlide() {
                if(this.currentSlideIndex >= this.sliderTopItems.length - 1) {
                    
                    this.currentSlideIndex = 0
                    
                } else {
                    this.currentSlideIndex++
                }
            }
        },

    }
</script>

<style>
.main__top__slider{
    height: 580px;
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 100px;
}
.main__slider {
    overflow: hidden;
    display: flex;
    position: relative;

}
.main__slider__line {
    display: flex;
    transition: all ease 1s;
}

.btn-next {
    z-index: 5;
    position: absolute;
    top: 44%;
    left: 1290px;
    padding: 19px 27px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px 0px 0px 8px;
}
.btn-prev {
    position: absolute;
    top: 44%;
    left: 0;
    z-index: 5;
    padding: 19px 23px;
    border-radius: 0px 8px 8px 0px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
}

@media(max-width: 1360px) {
    .main__top__slider {
        max-width: 1240px;
    }
    .main__top__slider {
        height: 500px;   
    }
    .btn-next,
    .btn-prev {
        top: 38%;
    }
    .btn-next {
        left: 1170px;
    }
}
@media(max-width: 1240px) {
    .main__top__slider {
        max-width: 1024px;
    }
    .main__top__slider {
        height: 450px;   
    }
    .btn-next,
    .btn-prev {
        top: 58%;
    }
    .btn-next {
        left: 955px;
    }
}
@media(max-width: 1024px) {
    .main__top__slider {
        max-width: 768px;
    }
    .main__top__slider {
        height: 400px;   
    }
    .btn-next,
    .btn-prev {
        top: 50%;
    }
    .btn-next {
        left: 700px;
    }
}

@media(max-width: 792px) {
    .main__top__slider {
        max-width: 540px;
    }
    .main__top__slider {
        height: 500px;   
    }
    .btn-next,
    .btn-prev {
        top: 40%;
    }
    .btn-next {
        left: 470px;
    }
}

@media(max-width: 540px) {
    .main__top__slider {
        max-width: 360px;
        height: 400px;
    }
    .btn-next,
    .btn-prev {
        top: 15%;
    }
    .btn-next {
        left: 300px;
    }
}


</style>