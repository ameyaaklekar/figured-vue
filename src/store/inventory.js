import axios from "axios"

export default {
  namespaced: true,

  state: {
    requestedPrice: null,
  },
  getters: {
    requestedPrice(state) {
      return state.requestedPrice
    }
  },
  mutations: {
    SET_REQUESTED_PRICE(state, data) {
      state.requestedPrice = data
    }
  },
  actions: {
    async getRequestedPrice({ commit }, data) {
      try {
        let response = await axios.post("product/value", data)

        return response.data
      } catch (e) {
        commit("SET_REQUESTED_PRICE", null)

        if (!e.response.data.success || e.response.data.errors) {
          return e.response.data
        }
      }
    }
  }
}