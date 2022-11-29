export default {
    namespaced: true,
    actions: {
        aIfLoginInterface(state, value) {// 设置是否显示登录菜单
            state.commit("ifLoginInterface", value)
        },
        aIfNavigationBars(state, value){
            state.commit("ifNavigationBars", value)
        },
    },
    mutations: {
        ifLoginInterface(state, value) {
            state.ifShowLogin = value
        },
        ifNavigationBars(state, value){
            state.ifShowNavigationBars = value
        }
    },
    state: {
        ifShowLogin: false, // 判断是否显示登录注册菜单
        ifShowNavigationBars:false
    },
    getters: {},
}