export default {
    state: {
        kitchenItem: [], // карточки кухни
        cart: [] // сама корзина
    },
    mutations: {
        SET_CART: (state, kitchenItem) => { // добавление карточек в корзину
            state.cart.push(kitchenItem)
        },
        REMOVE_FROM_CART: (state, index) => { // удаление карточек в корзине
            state.cart.splice(index, 1)
        }
    },
    actions: {
        ADD_TO_CART({commit}, kitchenItem) { // кнопка добавления
            commit('SET_CART', kitchenItem)
        },
        DELETE_FROM_CART({commit}, index) { // кнопка удаления
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        CART(state) { // получение карточек 
            return state.cart;
        }
    }
}