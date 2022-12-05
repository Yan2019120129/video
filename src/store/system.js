export default {
    namespaced: true,
    actions: {
        aSubarea(state, value) {
            state.commit("mSubarea", value)
            // console.log("aSubarea", value)
        }
    },
    mutations: {
        mSubarea(state, value) {
            state.subarea = value
            // console.log("mSubarea", state.subarea)
        }
    },
    state: {
        subarea: {},
    },
    getters: {},
}