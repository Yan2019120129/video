import jwtDecode from "jwt-decode";

export default {
    namespaced: true,
    actions: {
        aPlaceToken(state, value) {
            // state.token = value
            state.commit("placeToken", value) // 放置token
        },
        aAnalysisToke(state, value) {
            state.commit("analysisToke", value)
        },
        aIfLogin(state, value) { // 设置是否处于登录状态
            state.commit("ifLogin", value)
        },
    },
    mutations: {
        ifLogin(state, value) {
            state.ifLogin = value
        },
        placeToken(state, value) {
            state.token = value
        },
        analysisToke(state, value) {
            const token = jwtDecode(value)  // 解析token
            state.analysisToken = token
        }
    },
    state: {
        ifLogin: false, // 判断是否登录
        token: "", // vue和localstorage各存一份，方便动态更新token
        analysisToken: {}, // vue和localstorage各存一份，方便动态更新token
    },
    getters: {},
}