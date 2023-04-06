import { createStore } from 'vuex'
import cart from './modules/cart'


export default new createStore({
    modules: {
        cart // корзина
    }
})
