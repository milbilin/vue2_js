import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于存储全局数据
    data: {
      num: 1
    },
    index: 5
  },
  getters: {
  },
  mutations: {
    //mutation：用于操作数据
    handleCommitData(state, value) {
      state.num += value
    }
  },
  actions: {
    //action：用于响应组件中的动作
    handleActionData(context, value) {
      //将事件提交给VueX的commit处理
      context.commit('handleCommitData', value)
    }
  },
  modules: {
  }
})
