<template>
    <v-header></v-header>
    <div class="pageItem">
        <div class="pageItem__info">
            <div class="pageItem__info__header">
                <div class="pageItem__info__header-img">
                    <img src="@/assets/mainImg/1.png" alt="">
                </div>
                <div class="pageItem__info__header-des">
                    <div class="des-title">
                        <span>Кухня Маттео 10</span>
                    </div>
                    <div class="des-full">
                        <div class="des-full-title">
                            <p>Фасад</p>
                            <p>Покрытие</p>
                            <p>Корпус</p>
                        </div>
                        <div class="des-full-subtitle">
                            <p>МДФ EGGER</p>
                            <p>ПВХ-плёнка</p>
                            <p>ЛДСП Kronospan 16 мм</p>
                        </div>
                    </div>
                    <div class="des-price">
                        <div class="des-descount">
                            <span>180 000 ₽ </span>
                        </div>
                        <div class="des-fullPrice">
                            <span>220 000 ₽</span>
                        </div>
                    </div>
                    <div class="des-btn">
                        <v-button><span> Рассчитать по своим размерам</span></v-button>
                    </div>
                    <div class="des-message">
                        <span>* Фото от сборщика</span>
                    </div>
                </div>
            </div>
            <div class="pageItem__info__footer">
                <div class="pageItem__info__footer-title">
                    <span>О кухне</span>
                </div>
                <div class="pageItem__info__footer-subtitle">
                    <p>
                        Кухонный гарнитур Маттео с фасадами в белых и розовых тонах. 
                        Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете. 
                        Кухня оснащена полностью встроенной техникой и локальной подсветкой. Барная стойка расположена выше уровня рабочей зоны кухни и имеет в левой части встроенный винный шкаф. 
                    </p>
                    <p>
                        Мойка из искусственного камня интегрирована в столешницу и вынесена на боковую стену. Духовой шкаф и холодильник располагаются в правой части гарнитура в высоких колонках.

                    </p>
                </div>

            </div>
        </div>
        <div class="pageItem__video">
            <div class="pageItem__video__kitchen">
                <div class="pageItem__video__kitchen-title"><span>Видео Кухни</span></div>
                <div class="pageItem__video__kitchen-video"><img src="@/assets/mainImg/sliderVideo/1.png" alt=""></div>
            </div>
            <div class="pageItem__video__feedback">
                <div class="pageItem__video__kitchen-title"><span>Видео отзыв</span></div>
                <div class="pageItem__video__kitchen-video"><img src="@/assets/mainImg/sliderVideo/2.png" alt=""></div>
            </div>
        </div>
        <div class="pageItem__sign">
            <div class="pageItem__sign-title">
                <span>Обращение директора салона</span>
            </div>
            <div class="pageItem__sign__form">
                <div class="sign__form-video">
                    <img src="@/assets/mainImg/sliderVideo/2.png" alt="">
                </div>
                <div class="send">
                    <div class="send-title">
                        <span>Записаться в салон</span>
                    </div>
                    <div class="send-subtitle">
                        <span>Встретим, нарисуем вам проект, покажем материалы, расскажем отличия, посмотрите образцы. Угостим кофе ☕️</span>
                    </div>
                    <form action="#" @submit="checkForm">
                        <div class="form">
                            <div class="input-name">
                                <p>Представьтесь</p>
                                <input 
                                    v-model="name"
                                    type="text" 
                                    placeholder="Ваше имя" 
                                    class="input-form"
                                >
                            </div>
                            <div class="input-phone">
                                <p>Телефон</p>
                                <input 
                                    v-model="phone"
                                    type="number" 
                                    placeholder="+7 (000) 000-00-00" 
                                    class="input-form"
                                >
                            </div>

                        </div>
                        <v-button><span>Записаться в салон</span></v-button>

                    </form>
                    <div class="sign__from-message">
                        <span>Нажимая на кнопку записаться в салон, я принимаю условия политики конфиденциальности.</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="pageItem__refer">
            <div class="refer__body">
                <div class="refer__telegram">
                    <div class="telegram-svg">
                        <a href="https://t.me/youR_eld3R_sist3R"><img src="@/assets/UI/Telegram.svg" alt=""></a>
                    </div>
                    <div class="refer__telegram-body">
                        <div class="refer-title">
                            <a href="https://t.me/youR_eld3R_sist3R">Перейти в Телеграм <img src="@/assets/UI/ReferArrow.svg" alt=""></a>
                        </div>
                        <div class="refer-subtitle">
                            <p>Идеальные решения для тех, кто хочет ближе познакомиться с компанией, быть в курсе наших новых работ, скидок и акций</p>
                        </div>
                    </div>
                </div>
                <div class="refer__youtube">
                    <div class="youtube-svg">
                        <a href="https://www.youtube.com/channel/UCH8rVLbvwU0Ii3rhR9KG_GA"><img src="@/assets/UI/Youtube.svg" alt=""></a>
                    </div>
                    <div class="refer__youtube-body">
                        <div class="refer-title">
                            <a href="https://www.youtube.com/channel/UCH8rVLbvwU0Ii3rhR9KG_GA">Смотреть больше видео <img src="@/assets/UI/ReferArrow.svg" alt=""></a>
                        </div>
                        <div class="refer-subtitle">
                            <p>Больше видео контента, для самых искушенных</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <v-footer></v-footer>
</template>

<script>
    import VHeader from './AK-Header.vue';
    import VFooter from './AK-Footer.vue';
    import VButton from '@/components/UI/AK-Button.vue';
    
    export default {
        components: {
            VButton, VHeader, VFooter
        },
        data() {
            return {
                name: null,
                phone: null,
            }
        },

        methods: {
            checkForm(event) {
                event.preventDefault()
                this.name = ''
                this.phone = ''
            }

        }
    }
</script>

<style>
.pageItem {
    
    margin: 0 auto;
    margin-top: 50px;
    max-width: 1360px;
    width: 100%;
}
.pageItem__info {
    margin-bottom: 100px;
}
.pageItem__info__header {
    display: flex;
    font-weight: 500;

}

.pageItem__info__header-des {
    padding: 60px;
}
.des-title {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 40px;
}
.des-full {
    display: grid;
    grid-template-columns: 140px 1fr;
    margin-bottom: 40px;
}
.des-full-title {
    font-size: 16px;
    line-height: 150%;
    color: #878B90;
}
.des-full-subtitle {
    font-size: 16px;
    line-height: 150%;
}
.des-price {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 40px;
}
.des-descount {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
}
.des-fullPrice {
    font-size: 24px;
    line-height: 24px;
    text-decoration-line: line-through;
    color: #878B90;
}
.des-btn {
    width: 332px;
    margin-bottom: 40px;
}
.des-message {
    font-size: 14px;
    line-height: 150%;
}

.pageItem__info__footer {
    max-width: 870px;
    width: 100%;
    padding: 60px;
}
.pageItem__info__footer-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
}
.pageItem__info__footer-subtitle {
    font-size: 16px;
    line-height: 150%;
}
.pageItem__info__footer-subtitle p {
    margin-bottom: 20px;
}
.pageItem__video { 
    background-color: #B17955;
    display: grid;
    grid-template-columns: 2fr 2fr;
    padding: 100px 40px;
    font-size: 32px;
    line-height: 39px;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
}

.pageItem__video__kitchen-title {
    margin-bottom: 60px;
}

.pageItem__sign {
    margin-bottom: 80px;
}
.pageItem__sign-title {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 60px;
}
.pageItem__sign__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}
.sign__form-video img{
    width: 650px;
}

.send-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 16px;
}
.send-subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 40px;
}
.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.form p {
    margin-bottom: 10px;
    color: #878B90;
    font-size: 14px;
    line-height: 150%;
}
.form input{
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid gray;
}
.input-form {
    width: 250px;
    padding: 0 0 5px 0;
}
.form input[type=text],
.form input[type=number] {
    font-size: 16px;
    line-height: 150%;
}
.sign__from-message {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #878B90;
}
form {
    margin-bottom: 24px;
}

.pageItem__refer {
    margin-bottom: 100px;
}

.refer__body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.refer__telegram {
    display: flex;
    margin-left: 40px;

}
.refer__telegram-body {
    margin-left: 40px;

}
.refer-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 17px;
}
.refer-title img{
    margin-top: 3px;
    margin-left: 10px;

}
.refer-subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
}
.refer__youtube {
    display: flex;
    margin-left: 40px;

}
.refer__youtube-body {
    margin-left: 40px;
}
 
@media(max-width: 1360px) {
    .pageItem {
        max-width: 1240px;
    }
    .pageItem__info__header-img img{
        width: 760px;
    }
    .sign__form-video img{
        width: 600px;
    }
}
@media(max-width: 1240px) {
    .pageItem {
        max-width: 1124px;
    }
    .pageItem__info__header {
        height: 433px;
    }
    .pageItem__info__header-img img{
        width: 650px;
    }
    .pageItem__info__header-des {
        padding: 20px 40px;
    }
    .send {
        padding: 0 20px;
    }
    .form {
        display: grid;
        grid-template-columns: 1fr;
    }
}
@media(max-width: 1124px) {
    .pageItem {
        max-width: 968px;
        margin: 0 auto;
    }  
    .pageItem__info__header-img img{
        width: 968px;
    }
    .pageItem__info__header {
        flex-wrap: wrap;
    }
    .pageItem__info__header-des {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 30px 60px;
    }
    .pageItem__info__footer {
        margin-top: 440px;
    }
    .des-full,
    .des-btn {
        margin-left: 20px;
    }
    .pageItem__video {
        grid-template-columns: 1fr;
    }
    .pageItem__sign {
        text-align: center;
    }
    .pageItem__sign__form {
        display: grid;
        grid-template-columns: 1fr;
    }
    .send {
        padding: 20px 0;
    }
}
@media(max-width: 968px) {
    .pageItem {
        max-width: 768px;
        margin: 0 auto;
    }  
    .pageItem__info__header-img img{
        width: 768px;
    }
    .pageItem__info__footer {
        margin-top: 300px;
    }
    .sign__form-video img{
        width: 768px;
    }
    .refer__body {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 50px;
    }
    .refer__telegram, .refer__youtube {
        margin-left: 0;
    }
    .refer__telegram-body, .refer__youtube-body {
        margin-left: 20px;
    }
    .refer-title {
        font-size: 14px;
    }
    .refer-subtitle {
        font-size: 12px;
    }
}
@media(max-width: 768px) {
    .pageItem {
        max-width: 540px;
        margin: 0 auto;
    }  
    .pageItem__info__header-img img{
        width: 540px;
    }
    .pageItem__info__header-des {
        display: grid;
        grid-template-columns: 1fr;
        padding: 30px 0px;
    }
    .des-full {
        margin-left: 0;
    }
    .des-btn {
        margin-left: 0;
    }
    .pageItem__info__footer {
        margin-top: 370px;
        padding: 0;
    }
    .pageItem__sign {
        text-align:start;
    }
    .sign__form-video img{
        width: 540px;
    }
}
@media(max-width: 540px) {
    .pageItem {
        max-width: 360px;
        margin: 0 auto;
    }  
    .pageItem__info__header-img img{
        width: 360px;
    }
    .pageItem__info__footer {
        margin-top: 250px;
    }
    .pageItem__video {
        padding: 0;
    }
    .pageItem__video__kitchen,
    .pageItem__video__feedback {
        padding: 40px 0;
    }
    .pageItem__video img {
        width: 320px;
    }
    .sign__form-video img{
        width: 360px;
    }
}
</style>