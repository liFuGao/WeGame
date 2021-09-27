import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: false
    },
    mutations: {
        SET_TOKEN(state , data) {
            state.token = data
        }
    },
    actions: {
        SETTOKEN({commit} , data) {
            commit('SET_TOKEN' , data)
        }
    },
})
