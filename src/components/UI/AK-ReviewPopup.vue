<template>
    <div class="popup__wrapper" ref="popup_wrapper">
        <div class="popup">
            <div class="popup_close">
                <i class="material-icons" @click="clickClosePopup">close</i>
            </div>
            <div class="popup__header">
                <div class="popup__header-title">
                    <p>Мой отзыв</p>
                </div>
            </div>
            <form action="#" @submit="checkForm">
                <div class="popup__form">
                    <div class="popup__form-input">
                        <p>Представьтесь</p>
                        <p 
                            v-show="error != false" 
                            :style="{background: '#e99999', padding: '5px', fontSize: '20px', color: '#4a1d1d', width: '350px', borderRadius: '5px'}">
                            Введите имя
                        </p>
                        <input 
                            v-model="name"
                            type="text" 
                            placeholder="Ваше имя" 
                            class="input__name"
                        >
                    </div>
                    <div class="popup__form-textarea">
                        <p>Текст отзыва</p>
                        <p  
                            :style="{background: '#e99999', padding: '5px', fontSize: '20px', color: '#4a1d1d', width: '350px', borderRadius: '5px'}"
                            v-show="error != false">
                            Напишите комментарий
                        </p>
                        <textarea v-model="comment"></textarea>
                    </div>
                </div>
                <div class="star-rating">
                    <p>Оценка</p>
                    <vue3-star-ratings :showControl="false" :style="{margin: 0}"/>
                </div>
                <v-button :style="{color: '#fff',}">Оставить отзыв</v-button>
            </form>

        </div>
    </div>
</template>

<script>
    import VButton from '@/components/UI/AK-Button.vue';
    export default {
        name: 'v-review-popup',
        components: {
            VButton
        },
        data() {
            return {
                name: '',
                comment: '',
                error: false
            }
        },
        methods: {
            checkForm(event) {
                if(this.name === '' || this.comment === '') {
                    this.error = true
                } else {
                    this.name = '',
                    this.comment = ''
                    this.$emit('closePopupBtn')

                }
                event.preventDefault()
            },
            clickClosePopup() {
                this.$emit('closePopup')
            }

        },
        mounted() {
            let vm = this;
            document.addEventListener('click', (item) => {
                if(item.target === vm.$refs['popup_wrapper']) {
                    vm.clickClosePopup()
                }
            })
        }


    }
</script>

<style>
.popup__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(46, 46, 46, 0.6);
}
.popup {
    position: fixed;
    top: 150px;
    left: 33%;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 8px;
    z-index: 203;
}
.popup_close {
    text-align: end;
}
.popup__header {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
}
.popup__form p{
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #878B90;
    margin-bottom: 8px;
}
.input__name {
    border: none;
    border-bottom: 1px solid #878B90;
    max-width: 600px;
    width: 100%;
}
.popup__form input[type=text] {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 40px;
}

.popup__form-textarea textarea{
    max-width: 600px;
    width: 100%;
    min-height: 110px;
    padding: 16px 22px;
    border: 1px solid rgba(135, 139, 144, 0.5);
    border-radius: 8px;
}

.star-rating {
    display: flex;
}
.star-rating p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 150%;
}

@media(max-width: 1240px) {
    .popup {
        left: 20%;
    }
}
@media(max-width: 792px) {
    .popup {
        left: 15%;
    }
}

@media(max-width: 540px) {
    .popup {
        left: 0%;
    }
}
</style>