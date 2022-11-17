import jwtDecode from "jwt-decode";

export default {
    namespaced: true,
    actions: {
        placeToken(state, value) {
            // state.token = value
            state.commit("placeToken", value) // 放置token
            console.log("actions.placeToken执行")
        },
        analysisToke(state, value) {
            state.commit("analysisToke", value)
        }
    },
    mutations: {
        ifLoginInterface(state, value) {
            state.ifShowLogin = value
        },
        ifLogin(state, value) {
            state.ifLogin = value
        },
        placeToken(state, value) {
            console.log("mutations.placeToken执行")
            state.token = value
        },
        analysisToke(state, value) {
            console.log("mutations.analysisToke执行")
            const token = jwtDecode(value)  // 解析token
            state.analysisToken = token
            console.log("解析的token", token)
        }
    },
    state: {
        ifShowLogin: false, // 判断是否显示登录注册菜单
        ifLogin: false, // 判断是否登录
        token: "", // vue和localstorage各存一份，方便动态更新token
        analysisToken: "", // vue和localstorage各存一份，方便动态更新token
    },
    getters: {},
}