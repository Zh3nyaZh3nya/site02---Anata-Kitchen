<template >
    <div class="header">
        <v-popup
            v-for="popupItem in popupItems"
            :key="popupItem.id"
            :VPopup_data="popupItem"
            v-show="popupItem.visiblePopup"
            @toClosePopup="closePopup(popupItem)"
            @toClosePopupBtn="closePopupBtn(popupItem)"
        >
        
        </v-popup>
        <div class="header__burger-menu">
            <div class="header__burger-top">
                <div class="header__burger__top__logo">

                    <div class="header__burger__top__logo--img">
                        <img src="@/assets/headerImg/Subtract.svg" alt="">
                    </div>


                </div>

                <div class="header__top__logo--title">
                    <span>Аната</span> <span>- Кухни</span>
                </div>

                <div class="header__top__info__address">
                    <p>Москва,</p>  <span>Дмитровское шоссе, д 62 стр 5</span>
                </div>

                <div class="header__burger__top__main__info">
                    <div class="header__burger__top__main__info-phone">
                        <span>+7 499 321-20-63</span>
                    </div>
                    <div class="header__burger__top__main__info-time">
                        <span>9:00 - 20:00 ежедневно</span>
                    </div>
                </div>

                <div class="header__burger__top__info__counter">
                    <button @click="addLike">    
                        <div class="header__burger__top__info__counter-like">
                            <img src="@/assets/headerImg/Like.svg" alt="">
                        </div>
                        <div class="header__burger__info__counter-number">
                            <span>{{likes}}</span>
                        </div>
                    </button>
                </div>

                <div class="burger__menu">
                    <transition name="fade" mode="out-in">
                        <i class="material-icons menu" v-if="!showBurger" @click="showBurger = !showBurger, activeLink = !activeLink" key="menu"></i>
                        <i class="material-icons clear" v-else @click="showBurger = !showBurger, activeLink = !activeLink" key="clear"></i>
                    </transition>

                </div>

            </div>

            <transition name="fade">
                <div class="header__burger__bot__list" :class="{ active: activeLink}">
                    <ul class="header__burger__bot__list--link" v-if="showBurger">
                        <li><RouterLink to="/">Главная</RouterLink></li>
                        <li><RouterLink to="/kitchen">Наши кухни</RouterLink></li>
                        <li><RouterLink to="/reviews">Отзывы</RouterLink></li>
                        <li><RouterLink to="/video">Видео</RouterLink></li>
                        <li><a href="https://t.me/youR_eld3R_sist3R">Телеграм</a></li>
                    </ul>
                </div>
            </transition>

            <div class="btn-burger">
                <div class="header__burger__bot__button__project ">
                    <button class='btnStyle burger' @click="showPopup">

                        <img src="@/assets/headerImg/box.svg" alt="">
                        <span>Проект + Расчет</span>
                    </button>
                    <div class="header__bot__button__project__message">
                        <span>5 вариантов за 5 минут </span>
                    </div>
                </div>

                <div class="header__burger__bot__button__zamer">
                    <button class="btnStyle burger" @click="showPopup">
                        <img src="@/assets/headerImg/line.svg" alt="">
                        <img src="@/assets/headerImg/arrow.svg" alt="">
                        <span>Вызвать</span><span>замерщика с образцами</span>
                        <span>Замерщик</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="header__top">
            <div class="header__top__logo">

                <div class="header__top__logo--img">
                    <img src="@/assets/headerImg/Subtract.svg" alt="">
                </div>

                <div class="header__top__logo--title">
                    <span>Аната</span> <span>- Кухни</span>
                </div>
            </div>

            <div class="header__top__info">

                <div class="header__top__info__address">
                    <p>Москва,</p>  <span>Дмитровское шоссе, д 62 стр 5</span>
                </div>

                <div class="header__top__info__phone">
                    <span>+7 499 321-20-63</span>
                    <button class="header__top__info__phone--btn">
                        <p>Заказать звонок</p>
                    </button>
                </div>

                <div class="header__top__info__time">
                    <span>9:00 - 20:00</span> <p>ежедневно</p>
                </div>

                <div class="header__top__info__counter">
                    <button @click="addLike">    
                        <div class="header__top__info__counter-like">
                            <img src="@/assets/headerImg/Like.svg" alt="">
                        </div>
                        <div class="header__top__info__counter-number">
                            <span>{{likes}}</span>
                        </div>
                    </button>
                </div>
        
            </div>
        </div>
        <div class="header__bot">

            <div class="header__bot__list">

                <ul class="header__bot__list--link">
                    <li><RouterLink to="/">Главная</RouterLink></li>
                    <li><RouterLink to="/kitchen">Наши кухни</RouterLink></li>
                    <li><RouterLink to="/reviews">Отзывы</RouterLink></li>
                    <li><RouterLink to="/video">Видео</RouterLink></li>
                    <li><a href="https://t.me/youR_eld3R_sist3R"><div class="telegram--img"><img src="@/assets/headerImg/telegram.svg" alt=""></div></a></li>
                    <li><a href="https://t.me/youR_eld3R_sist3R">Телеграм</a></li>
                </ul>

            </div>

            <div class="header__bot__button">

                <div class="header__bot__button__project ">
                    <button class='btnStyle' @click="showPopup(popupItems[0])">
                        
                        <img src="@/assets/headerImg/box.svg" alt="">
                        <span>Проект + Расчет</span>
                    </button>
                    <div class="header__bot__button__project__message">
                        <span>5 вариантов за 5 минут </span>
                    </div>
                </div>
                <div class="header__bot__button__zamer">
                    <button class="btnStyle" @click="showPopup(popupItems[1])">
                        <img src="@/assets/headerImg/line.svg" alt="">
                        <img src="@/assets/headerImg/arrow.svg" alt="">
                        <span>Вызвать замерщика с образцами</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import VPopup from './UI/AK-Popup.vue';

export default {
    name: 'VHeader',
    components: {
        VPopup
    },
    data() {
        return {
            likes: 3,
            popupItems: [
                {
                    id: 1,
                    img: 'Vector.svg',
                    title: 'Проект + Расчет',
                    btn: 'Рассчитать'
                },
                {
                    id: 2,
                    img: 'Group.svg',
                    title: 'Вызвать замерщика с образцами',
                    btn: 'Вызвать'
                }
            ],
            visiblePopup: false,
                showBurger: false,
            activeLink: false
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        showPopup(popupItem) {
            popupItem.visiblePopup = true
        },
        closePopup(popupItem) {
            popupItem.visiblePopup = false
        },
        closePopupBtn(popupItem) {
            popupItem.visiblePopup = false

        }
    },
}
</script>

<style scoped>
    .header {
        font-size: 16px;
        max-width: 1360px;
        width: 100%;
        margin: 29px auto;
    }
    #footer_header {
        max-width: 1300px;    
    }
    .header__burger-menu {
        display: none;
    }

    .header__top {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 29px 0;
    }

    .header__top__logo {
        display: flex;
    }

    .header__top__logo--title {
        font-size: 25px;
        margin-left: 10px;
        font-weight: 700;
        margin-top: 5px;
    }

    .header__top__logo--title span:nth-child(1) {
        color: #B17955;
    }

    .header__top__info {
        line-height: 120%;
        display: flex;
        column-gap: 27px;
    }

    .header__top__info__address {
        font-size: 14px;
        line-height: 150%;
    }

    .header__top__info__phone {
        display: grid;
        grid-template-columns: 1fr;
        font-size: 16px;
        font-weight: 600;
    }

    .header__top__info__phone--btn {
        font-size: 14px;
        color: #878B90;
    }

    .header__top__info__time {
        display: grid;
        grid-template-columns: 1fr;
    }

    #footer_header .header__top__info__counter {
        display: none;
    }
    .header__top__info__counter:hover img {
        transition: all ease 0.3s;

        filter: brightness(0) saturate(100%) invert(45%) sepia(4%) saturate(6373%) hue-rotate(340deg) brightness(112%) contrast(59%);
    }
    .header__top__info__counter:hover span {
        transition: all ease 0.3s;

        color: #B17955;
    }

    .header__top__info__counter button {
        display: flex;
        column-gap: 15px;
        margin-left: 30px;
        padding-top: 10px;
    }

    .header__top__info__counter-number {
        font-size: 18px;
    }

    .header__bot {
        display: flex;
        justify-content: space-between;
    }
    #footer_header .header__bot__list--link li a{
        color: #fff;
    }
    .header__bot__list{
        display: flex;
        margin-top: 10px;
    }
    .header__bot__list--link {
        display: flex;
        column-gap: 40px;
        text-align: center;
    }

    .header__bot__list--link a:hover {
        transition: all ease 0.3s;
        color: #B17955;
    }

    .header__bot__button {
        display: flex;
        column-gap: 25px;
    }

    .header__bot__button__project {
        position: relative;
    }
    #footer_header .btnStyle {
        background-color: #fff;
    }
    .btnStyle {
        padding: 10px 20px;
        border: 1px solid rgba(135, 139, 144, 0.5);
        border-radius: 8px;
        display: flex;
    }
    .btnStyle span{
        padding-top: 2px;
        margin-left: 15px;
    }
    #footer_header .btnStyle:hover,
    .btnStyle:hover{ 
        transition: all ease 0.3s;
        background-color: #B17955;
    }   

    .btnStyle:hover img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(107%) contrast(108%);
    }

    .btnStyle:hover span{
        color: #fff;
    }

    .header__bot__button__project__message {
        position: absolute;
        top: 38px;
        left: 25px;
        font-size: 11px;
        background: #B17955;
        border-radius: 5px;
        padding: 2px 5px;
        color: #fff;
    }


    @media(max-width: 1360px) {
        .header{
            max-width: 1240px;
        }
        .btnStyle.burger span:nth-child(5) {
            display: none;
        }
    } 

    @media(max-width: 1240px) {
        .header{
            max-width: 1024px;
        }

        .header__bot__list--link li:nth-child(5) {
            display: none;
        }
        .header__bot__list--link{
            column-gap: 25px;
        }
    }

    @media(max-width: 1024px) {
        .header{
            max-width: 768px;
        }
        .header__burger-menu {
            display: block;
        }
        .header__top {
            display: none;
        }   
        .header__bot { 
            display: none;
        }

        .header__burger-top {
            display: flex;
            justify-content: space-between;
            position: relative;
            z-index: 101;
        }

        .header__top__logo--title {
            margin-top: 8px;
            margin-left: 0;
            font-size: 16px;
        }
        .header__burger__top__main__info {
            line-height: 125%;
            text-align: center;
        }
        .header__burger__top__main__info-phone {
            font-weight: 600;
            font-size: 16px;
        }

        .header__burger__info__counter-number {
            font-size: 17px;
        }
        .header__burger__bot__list {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .header__burger__bot__list.active {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 10;
        }
        .header__burger__bot__list--link {
            background: #fff;
            display: flex;
            justify-content: center;
            position: relative;
            width: 100%;
            column-gap: 40px;
            height: 100%;
        }
        
        .header__burger__bot__list--link ul{
            margin: 0;
            padding: 0;
            position: absolute;
            width: 100%;
        }
        .header__burger__bot__list--link li {
            align-items: center;
            cursor: pointer;
            display: flex;
            font-size: 1.5em;
            height: 2m;
            justify-content: center;
            transition: all .3 ease;
        }

        .btn-burger {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
        }
        .header__burger__bot__button__project {
            position: relative;
        }

        .menu{
            cursor: pointer;
            font-size: 2em;
            transition: all .3 ease;
        }
        .btnStyle.burger span:nth-child(4) {
            margin-left: 5px;
        }

        .header__burger__top__info__counter {
            position: relative;
        }
        .header__burger__top__info__counter-like {
            margin-top: 5px;
        }
        .header__burger__info__counter-number {
            top: 1px;
            right: -8px;
            position: absolute;
            background: #B17955;
            color: #fff;
            border: 2px solid #FFFFFF;
            border-radius: 30px;
            font-size: 11px;
            padding: 1px 3px 1px 3px;
        }
        #footer_header .header__burger-menu {
            display: none;
        }
        #footer_header .header__top {
            display: block;
        }
        
        #footer_header .header__top  {
            display: flex;
            max-width: 768px;
            width: 100%;
            margin: 0 auto;
        }
        #footer_header .header__bot {
            max-width: 768px;
            width: 100%;
            margin: 0 auto;
        }
        #footer_header .header__bot {
            display: grid;
            grid-template-columns: 1fr;
    
        }
        #footer_header .header__top__logo--title {
            margin-left: 15px;
        }
        #footer_header .header__bot__list--link {
            margin-top: 30px;
            display: flex;
            column-gap: 100px;
        }
        #footer_header .header__bot__button {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
    }
    @media(max-width: 792px) {
        .header__burger-menu {
            max-width: 540px;
            margin: 0 auto;
        }
        .header__top__info__address {
            display: none;
        }
        .header__burger__bot__list--link {
            display: grid;
            grid-template-columns: 1fr;
            padding-top: 100px;
        }
        .header__burger__bot__list--link ul {
            padding-top: 100px;
        }
        #footer_header .header__top{
            max-width: 540px;
            margin: 0 auto;
        }
        #footer_header .header__bot {
            max-width: 540px;
            margin: 0 auto;
        }
        #footer_header .header__bot__list--link {
            column-gap: 40px;
        }
        #footer_header .header__top {
            display: grid;
            grid-template-columns: 1fr;
        }
        #footer_header .header__top__logo {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        #footer_header .header__top__info__address {
            display: block;
        }
    }
    @media(max-width: 540px) {
        .header__burger-menu {
            max-width: 360px;
            margin: 0 auto;
        }
        .header__top__logo--title {
            display: none;
        }
        .btnStyle.burger span:nth-child(3),
        .btnStyle.burger span:nth-child(4) {
            display: none;
        }
        .btnStyle.burger span:nth-child(5) {
            display: block;
        }
        .header__burger__top__main__info-phone {
            font-size: 14px;
        }
        .header__burger__top__main__info-time {
            font-size: 11px;
        }
        #footer_header .header__top__logo--title {
            display: block;
        }
        #footer_header .header__bot__list--link {
            margin: auto;
            margin-top: 10px;
            column-gap: 16px;
            font-size: 13px;

        }
        #footer_header .header__top__info {
            display: grid;
        }
        #footer_header .header__top__info__address {
            display: grid;
            grid-column: 1 / 3;
            margin-bottom: 30px;
        }
        #footer_header .header__bot__button {
            display: flex;
            flex-wrap: wrap;
            max-width: 360px;
            width: 100%;
            margin: 0 auto;
            margin-top: 30px;
        }
        #footer_header .header__bot__button__project__message {
            left: 30%;
        }
 
        #footer_header .header__bot__button button {
            padding-left: 50px;
            width: 360px;
            margin: 0 auto;
            margin-bottom: 30px;
        }
        #footer_header .header__bot__button__project button {
            padding-left: 100px;
        }
    }
</style>