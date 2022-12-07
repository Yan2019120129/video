export default {
    namespaced: true,
    actions: {
        aIfLoginInterface(state, value) {// 设置是否显示登录菜单
            state.commit("ifLoginInterface", value)
        },
        aIfNavigationBars(state, value){
            state.commit("ifNavigationBars", value)
        },
        aIfLoginOrRegister(state,value){ // 判断是注册还是登录
            state.commit("mIfLoginOrRegister",value)
        }
    },
    mutations: {
        ifLoginInterface(state, value) {
            state.ifShowLogin = value
        },
        ifNavigationBars(state, value){
            state.ifShowNavigationBars = value
        },
        mIfLoginOrRegister(state,value){
            state.ifLoginOrRegister=value
        }
    },
    state: {
        ifLoginOrRegister:"",
        ifShowLogin: false, // 判断是否显示登录注册菜单
        ifShowNavigationBars:false
    },
    getters: {},
}