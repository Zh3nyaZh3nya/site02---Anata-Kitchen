export default {
    state: {
        kitchenItem: [],
        cart: []
    },
    mutations: {
        SET_CART: (state, kitchenItem) => {
            state.cart.push(kitchenItem)
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        ADD_TO_CART({commit}, kitchenItem) {
            commit('SET_CART', kitchenItem)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        CART(state) {
            return state.cart;
        }
    }
}