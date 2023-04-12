<template>
    <div class="cart__wrapper">
        <div class="cart__body">
            <div v-if="cart_data.length" class="cartItems">
                <akCartItem
                    v-for="(cartItem, index) in cart_data"
                    :key="cartItem.article"
                    :cartItem_data="cartItem"
                    @deleteItemCart="deleteItemCart(index)"
                />
            </div>
            <div v-else class="not-length">
                <span>Вы пока ничего не добавили</span>
            </div>

        </div>
    </div>
</template>

<script>
    import akCartItem from './AK-CartItem'
    import { mapActions } from 'vuex';
    
    export default {
        components: {  akCartItem  },
        
        props: {
            cart_data: {
                type: Array,
                default: () => []
            },
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART' // функция удаляющая содержимое
            ]),
            deleteItemCart(index) {
                this.DELETE_FROM_CART(index) // определяет по индексу какую карточку удалить
            }
        }
    }
</script>

<style lang="scss" scoped>

.cart__body {
    position: absolute;
    z-index: 100;
    border: 3px solid #e3e3e3;
    border-radius: 23px;
    top: 120%;
    right: 0%;
    max-width: 600px;
    width: 100%;
    background: #fff;
}
.not-length {
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
}
@media(max-width: 1024px) {
    .cart__body {
        min-width: 600px;
        right: 0%;
    }
}
@media(max-width: 792px) {
    .cart__body {
        right: -390%;
    }
}
@media(max-width: 540px) {
    .cart__body {
        min-width: 400px;
    }
}
</style>