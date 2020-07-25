import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))  //将序列化之后的userInfo信息反序列化
  },
  mutations: {
    //set -- 为state的属性赋值
    SET_TOKEN: (state,token) => {
      state.token = token
      localStorage.setItem("token",token) //浏览器关闭时存储到localStorage中
    },
    SET_USERINFO: (state,userInfo) => {
    state.userInfo = userInfo
    sessionStorage.setItem("userInfo",JSON.stringify(userInfo)) //浏览器关闭时存储到sessionStorage中
    },
    REMOVE_INFO: (state) => {
    state.token = ''
    state.userInfo = {}
    localStorage.setItem("token",'')
    sessionStorage.setItem("userInfo",JSON.stringify(''))
    }
  },
  getters:{
    //get -- 获取state中的属性值
    getUser: state => {
      return state.userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
