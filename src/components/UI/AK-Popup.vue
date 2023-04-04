<template>
    <div class="v-popup__wrapper" ref="v-popup_wrapper">
        <div class="v-popup">
            <div class="popup_close">
                <i class="material-icons" @click="toClosePopup">close</i>
            </div>
            <div class="v-popup-image">
                <img :src="require('@/assets/UI/' + VPopup_data.img)" alt="">
            </div>
            <div class="v-popup__header">
                <div class="v-popup__header-title">
                    <p>{{ VPopup_data.title }}</p>
                </div>
            </div>
            <form action="#" @submit="CheckForm">
                <div class="v-popup__form">
                    <div class="v-popup__form-input-name">
                        <p>Представьтесь</p>
                        <p 
                            v-show="error != false" 
                            :style="{background: '#e99999', padding: '5px', fontSize: '20px', color: '#4a1d1d', width: '300px', borderRadius: '5px'}">
                            Введите имя
                        </p>
                        <input 
                            v-model="name"
                            type="text" 
                            placeholder="Ваше имя" 
                            class="input__name"
                        >
                    </div>
                    <div class="v-popup__form-input-phone">
                        <p>Телефон</p>
                        <p 
                            v-show="error != false" 
                            :style="{background: '#e99999', padding: '5px', fontSize: '20px', color: '#4a1d1d', width: '300px', borderRadius: '5px'}">
                            Введите телефон
                        </p>
                        <input 
                            v-model="phone"
                            type="number" 
                            placeholder="+7 (000) 000-00-00" 
                            class="input__name"
                        >
                    </div>
                </div>

                <v-button :style="{color: '#fff',}">{{ VPopup_data.btn }}</v-button>
            </form>

        </div>
    </div>
</template>

<script>
    import VButton from '@/components/UI/AK-Button.vue';
    export default {
        name: 'v-popup',
        components: {
            VButton
        },
        data() {
            return {
                name: '',
                phone: '',
                error: false
            }
        },
        props: {
            VPopup_data: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            CheckForm(event) {
                if(this.name === '' || this.phone === '') {
                    this.error = true
                } else {
                    this.name = '',
                    this.phone = ''
                    this.$emit('toClosePopupBtn')

                }
                event.preventDefault()
            },
            toClosePopup() {
                this.$emit('toClosePopup')
            }

        },
        mounted() {
            let vm = this;
            document.addEventListener('click', (item) => {
                if(item.target === vm.$refs['v-popup_wrapper']) {
                    vm.toClosePopup()
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
.v-popup__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(46, 46, 46, 0.6);
    z-index: 223;
}
.v-popup {
    position: fixed;
    top: 150px;
    left: 40%;
    padding: 40px;
    max-width: 380px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 8px;
}
.popup_close {
    color: black;
    text-align: end;
}
.v-popup-image {
    margin-bottom: 32px;
}
.v-popup__header-title {
    color: #000000;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
}

.v-popup__form p{
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #878B90;
    margin-bottom: 8px;
}

.input__name {
    padding-bottom: 5px;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid #878B90;
    max-width: 600px;
    width: 100%;
}

@media(max-width: 1024px) {
    .v-popup {
        left: 35%;
    }
}
@media(max-width: 792px) {
    .v-popup {
        left: 20%;
    }
}
@media(max-width: 540px) {
    .v-popup {
        left: 1%;
    }
}


</style>