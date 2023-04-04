<template>
    <footer class="footer">
        <div class="footer__nav">

            <nav class="nav__style">
                <div class="nav-title">
                    <div class="nav__style-title footer--title" @click="showStyle = !showStyle">
                        <span>Стиль</span>
                    </div>

                    <div class="arrowShow">
                        <transition>
                            <i class="material-icons" v-if="!showStyle" @click="showStyle = !showStyle">keyboard_arrow_up</i> 
                            <i class="material-icons" v-else @click="showStyle = !showStyle">keyboard_arrow_down</i>
                        </transition>
                    </div>
                </div>

                <transition>
                    <ul class="nav__style-subtitle footer--subtitle" v-if="showStyle">
                        <li><a href="#">Классика</a></li>
                        <li><a href="#">Неоклассика</a></li>
                        <li><a href="#">Прованс</a></li>
                        <li><a href="#">Современный</a></li>
                        <li><a href="#">Скандинавский</a></li>
                        <li><a href="#">Лофт</a></li>
                        <li><a href="#">Барокко</a></li>
                        <li><a href="#">Минимализм</a></li>
                    </ul>
                </transition>

            </nav>

            <nav class="nav__fasad">
                <div class="nav-title">
                    <div class="nav__fasad-title footer--title" @click="showFasad = !showFasad">
                        <span>Фасад</span>
                    </div>

                    <div class="arrowShow">
                        <transition>
                            <i class="material-icons" v-if="!showFasad" @click="showFasad = !showFasad">keyboard_arrow_up</i> 
                            <i class="material-icons" v-else @click="showFasad = !showFasad">keyboard_arrow_down</i>
                        </transition>
                    </div>
                </div>

                <transition>
                    <ul class="nav__style-subtitle footer--subtitle" v-if="showFasad">
                        <li><a href="#">МДФ</a></li>
                        <li><a href="#">Эмаль</a></li>
                        <li><a href="#">Пластик</a></li>
                        <li><a href="#">Массив дерева</a></li>
                        <li><a href="#">Акрил</a></li>
                        <li><a href="#">ЛДСП</a></li>
                        <li><a href="#">Дуб</a></li>
                        <li><a href="#">Шпон</a></li>
                    </ul>
                </transition>
            </nav>

            <nav class="nav__form__kitchen">
                <div class="nav-title">
                    <div class="nav__form__kitchen-title footer--title" @click="showForm = !showForm">
                        <span>Форма кухни</span>
                    </div>

                    <div class="arrowShow">
                        <transition>
                            <i class="material-icons" v-if="!showForm" @click="showForm = !showForm">keyboard_arrow_up</i> 
                            <i class="material-icons" v-else @click="showForm = !showForm">keyboard_arrow_down</i>
                        </transition>
                    </div>
                </div>

                <transition>
                    <ul class="nav__style-subtitle footer--subtitle" v-if="showForm">
                        <li><a href="#">Прямые</a></li>
                        <li><a href="#">Г-образные</a></li>
                        <li><a href="#">П-образные</a></li>
                        <li><a href="#">Угловые</a></li>
                        <li><a href="#">С барной стойкой</a></li>
                        <li><a href="#">С островом</a></li>
                        <li><a href="#">С пеналом</a></li>
                        <li><a href="#">Нестандартные</a></li>
                    </ul>
                </transition>
            </nav>

            <nav class="nav__color">

                <div class="nav-title">
                    <div class="nav__color-title footer--title" @click="showColor = !showColor">
                        <span>Цвет</span>
                    </div>

                    <div class="arrowShow">
                        <transition>
                            <i class="material-icons" v-if="!showColor" @click="showColor = !showColor">keyboard_arrow_up</i> 
                            <i class="material-icons" v-else @click="showColor = !showColor">keyboard_arrow_down</i>
                        </transition>
                    </div>
                </div>

                <transition>
                    <ul class="nav__style-subtitle footer--subtitle" v-if="showColor">
                        <li><img src="@/assets/footer/1.svg" alt=""><a href="#">Белые</a></li>
                        <li><img src="@/assets/footer/2.svg" alt=""><a href="#">Серые</a></li>
                        <li><img src="@/assets/footer/3.svg" alt=""><a href="#">Капучино</a></li>
                        <li><img src="@/assets/footer/4.svg" alt=""><a href="#">Бежевые</a></li>
                        <li><img src="@/assets/footer/5.svg" alt=""><a href="#">Оливковые</a></li>
                        <li><img src="@/assets/footer/6.svg" alt=""><a href="#">Мятный</a></li>
                        <li><img src="@/assets/footer/7.svg" alt=""><a href="#">Черные</a></li>
                        <li><img src="@/assets/footer/8.svg" alt=""><a href="#">Коричневые</a></li>
                    </ul>
                </transition>
            </nav>

            <nav class="nav__size">
                <div class="nav-title">
                    <div class="nav__size-title footer--title" @click="showSize = !showSize">
                        <span>Размер</span>
                    </div>

                    <div class="arrowShow">
                        <transition>
                            <i class="material-icons" v-if="!showSize" @click="showSize = !showSize">keyboard_arrow_up</i> 
                            <i class="material-icons" v-else @click="showSize = !showSize">keyboard_arrow_down</i>
                        </transition>
                    </div>
                </div>
                <transition>
                    <ul class="nav__style-subtitle footer--subtitle" v-if="showSize">
                        <li><a href="#">Небольшие кухни</a></li>
                        <li><a href="#">Кухни 4 метра</a></li>
                        <li><a href="#">Кухни 5 метра</a></li>
                        <li><a href="#">Кухни 6 метра</a></li>
                        <li><a href="#">Кухни 8 метра</a></li>
                        <li><a href="#">Кухни 10 метра</a></li>
                        <li><a href="#">Кухни 12 метра</a></li>
                        <li><a href="#">Кухни 14 метра</a></li>
                    </ul>
                </transition>
            </nav>
        </div>
        <VHeaderVue id="footer_header"></VHeaderVue>
        <div class="footer__wotermark">
            <span>© 2022 Аната-Кухни. Все ресурсы сайта www.anata-kitchen.ru, включая (но не ограничиваясь) текстовую, графическую, фотографическую и видео информацию, структуру, дизайн и оформление страниц, товарные знаки, доменное имя, фирменное наименование являются объектами авторского права и прав на интеллектуальную собственность, защищены российским законодательством и международными соглашениями об охране авторских прав и интеллектуальной собственности.</span>
        </div>
    </footer>
</template>

<script>
    import VHeaderVue from './AK-Header.vue';
    export default {
        components: {
            VHeaderVue
        },
        data() {
            return {
                showStyle: false,
                showFasad: false,
                showForm: false,
                showColor: false,
                showSize: false
            }
        },
    }
</script>

<style scoped>
.footer ul li a{
    color: #fff;

}
.footer ul li a:hover {
    color: #B17955;
}

.footer {
    background: #2E2E2E;
    color: #fff;
    padding-bottom: 60px;

}
.footer__nav {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
}

.footer--title {
    margin-top: 40px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
}

.footer--subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 60px;
}
.footer--subtitle li {
    margin-bottom: 15px;
}
.nav__style-subtitle img {
    margin-right: 10px;
}

.footer__wotermark {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    margin-top: 60px;
    color: #878B90;
}
.arrowShow {
    margin-top: 40px;
}
.nav-title {
    display: flex;
    column-gap: 15px;
}

@media(max-width: 1024px) {
    .footer__nav {
        display: grid;
        grid-template-columns: 1fr;
    }
    .nav-title {
        display: flex;
        justify-content: space-between;
        margin: 0 30px;
    }
    .nav__style, .nav__fasad, .nav__form__kitchen, .nav__color, .nav__size {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .footer--subtitle {
        margin: 0 30px;
    }
    .footer__nav {
        border: none;
        margin-bottom: 55px;
    }
    
    .footer__wotermark {
        font-size: 12px;
        padding: 0 20px;
    }
}
</style>