import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Count = {
  state: {
    count: 1
  },
  mutations: {
    add(state, n) {
      state.count += n
    },
    reduce(state) {
      state.count--
    }
  },
  actions: {
    addAction(context) {
      context.commit('add', 8)
      setTimeout(() => { context.commit('reduce') }, 2000)
      console.log('我比reduce先执行了')
    },
    reduceAction({ commit }) {
      commit('reduce')
    }
  },
  getters: {
    count: function (state) {
      return (state.count += 88)
    }
  }
}

export default new Vuex.Store({
  modules: {
    count: Count
  }
})
