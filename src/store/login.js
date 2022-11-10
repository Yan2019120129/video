export default {
    namespaced: true,
    actions: {},
    mutations: {
        ifLoginInterface(state, value) {
            state.ifShowLogin = value
            console.log(state.ifShowLogin)
        },
        ifLogin(state, value) {
            state.ifLogin = value
        }
    },
    state: {
        ifShowLogin: false, // 判断是否显示登录注册菜单
        ifLogin: false, // 判断是否登录
    },
    getters: {},
}