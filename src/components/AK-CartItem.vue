<template>
    <div class="cart__item">
        <div class="cart__item__body">
            <div class="cart__item__body-img">
                <img v-for="image in cartItem_data.Images" :src="require('@/assets/mainImg/sliderCatalog/' + image)" alt="">
            </div>
            <div class="cart__item__body__info">
                <div class="cart__item__body__info-title">
                    <span>{{ cartItem_data.title }}</span>
                </div>
                <div class="cart__item__body__info-subtitle">
                    <span>{{ cartItem_data.subtitle }}</span>
                    <span>{{ cartItem_data.subtitle2 }}</span>
                    <span>{{ cartItem_data.subtitle3 }}</span>
                </div>
                <div class="cart__item__body__info-rate">
                    <div class="cart__item__body__info-price">
                        <span>{{ cartItem_data.price }}</span>
                    </div>
                    <div class="cart__item__body__info-desc">
                        <span>{{ cartItem_data.discount }}</span>
                    </div>
                </div>
                <div class="cart__item__body__info-btn">
                    <v-button @click="deleteItemCart">Удалить</v-button>
                    <v-button>Страница кухни</v-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VButton from './UI/AK-Button.vue';
    
    export default {
        name: 'ak-cart-item',
        components: {   VButton    },
        
        props: {
            cartItem_data: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            deleteItemCart() {
                this.$emit('deleteItemCart')
            }
        }
    }
</script>

<style lang="scss" scoped>

.cart__item {
    margin: 15px 15px 0px 15px;
    border-radius: 23px;
    border: 2px solid rgb(223, 210, 210);
    padding: 8px 8px 5px 15px;
}
.cart__item:last-child {
    margin-bottom: 15px;
}
.cart__item__body {
    display: flex;
}

.cart__item__body img {
    width: 200px;
    border-radius: 15px 0 0 15px;
}
.cart__item__body img:not(:first-child) {
    display: none;
}   
.cart__item__body__info {
    text-align: start;
    padding-left: 15px;
}
.cart__item__body__info-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}
.cart__item__body__info-subtitle {
    display: flex;
    column-gap: 30px;
    font-size: 13px;
    margin-bottom: 5px;
}
.cart__item__body__info-rate {
    display: flex;
    column-gap: 20px;
    font-size: 13px;
}
.cart__item__body__info-price {
    font-weight: 600;
}
.cart__item__body__info-desc {
    color: gray;
    font-size: 11px;
    text-decoration-line: line-through;
    margin-bottom: 15px;

}
.cart__item__body__info-btn {
    display: flex;
}
.cart__item__body__info-btn button{
    border: 1px solid;
    padding: 10px 0;
    margin-left: 0;
    color: #fff;
    max-width: 150px;
}

@media(max-width: 540px) {
    .cart__item__body {
        display: grid;
        grid-template-columns: 1fr;
    }
    .cart__item__body-img {
        text-align: center;
        margin-bottom: 10px;
    }
    .cart__item__body-img img {
        border-radius: 0 0 0 0;

    }
}

</style>