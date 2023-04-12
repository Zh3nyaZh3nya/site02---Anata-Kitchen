import { createStore } from 'vuex'
import cart from './modules/cart'
import kitchenItem from './modules/kitchenItem'

export default new createStore({
    modules: {
        cart, 
        kitchenItem,
    }
})
