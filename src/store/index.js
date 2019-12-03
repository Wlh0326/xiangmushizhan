import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 let store = new Vuex.Store({
  state: {
    list:[],
    deil:[]
  },
  mutations: {
    //渲染全部的数据
    stateList(state,dataItem){
      state.list = dataItem
    },
    //跳详情
    deilList(state,deilItem){
      let newData = state.deil.find(item=>item.id==deilItem.id)
      if(newData){
        return 
      }
      else{
         state.deil.push(deilItem)
      }
      console.log(state.deil)
    },
    //点赞
    addItem(state,addCount){
      let oldDate = state.deil.find(item=>item.id==addCount.id)
      oldDate.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store