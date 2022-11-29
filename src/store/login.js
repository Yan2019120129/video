import jwtDecode from "jwt-decode";

export default {
    namespaced: true,
    actions: {
        aPlaceToken(state, value) {
            // state.token = value
            state.commit("placeToken", value) // 放置token
            console.log("actions.placeToken执行")
        },
        aAnalysisToke(state, value) {
            state.commit("analysisToke", value)
            console.log("actions.analysisToke执行")
        },
        aIfLogin(state, value) { // 设置是否处于登录状态
            state.commit("ifLogin", value)
            console.log("ifLogin运行")
        },

    },
    mutations: {
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
            console.log("解析的token", state.analysisToken)
        }
    },
    state: {
        ifLogin: false, // 判断是否登录
        token: "", // vue和localstorage各存一份，方便动态更新token
        analysisToken: {}, // vue和localstorage各存一份，方便动态更新token
    },
    getters: {},
}