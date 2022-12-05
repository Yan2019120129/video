export default {
    namespaced: true,
    actions: {
        aPutVideoMain(state, value) {
            state.commit("mPutVideoMain", value)
            console.log("aPutVideoMain", value)
        },
        aPutVideoExtension(state, value) {
            state.commit("mPutVideoExtension", value)
            // console.log("aPutVideoExtension", value)
        },
        aPutVideoAimtron(state, value) {
            state.commit("mPutVideoAimtron", value)
            // console.log("aPutVideoAimtron", value)
        },
        aPutVideoCompetition(state, value) {
            state.commit("mPutVideoCompetition", value)
            // console.log("aPutVideoCompetition", value)
        },
        aPutVideoLiveStreaming(state, value) {
            state.commit("mPutVideoLiveStreaming", value)
            // console.log("aPutVideoLiveStreaming", value)
        }
    },
    mutations: {
        mPutVideoMain(state, value) {
            state.videoMain = value
            // console.log("mPutVideoMain", state.videoMain)
            let videoMain = JSON.stringify(value)
            localStorage.setItem("videoMain",videoMain)
            console.log("videoLiveStreaming成功放入本地")
        },
        mPutVideoExtension(state, value) {
            state.videoExtension = value
            // console.log("mPutVideoExtension", state.videoExtension)
            let videoExtension = JSON.stringify(value)
            localStorage.setItem("videoExtension",videoExtension)
            console.log("videoLiveStreaming成功放入本地")
        },
        mPutVideoAimtron(state, value) {
            state.videoAimtron = value
            // console.log("mPutVideoAimtron", state.videoAimtron)
            let videoAimtron = JSON.stringify(value)
            localStorage.setItem("videoAimtron",videoAimtron)
            console.log("videoLiveStreaming成功放入本地")
        },
        mPutVideoCompetition(state, value) {
            state.videoCompetition = value
            // console.log("mPutVideoCompetition", state.videoCompetition)
            let videoCompetition = JSON.stringify(value)
            localStorage.setItem("videoCompetition",videoCompetition)
            console.log("videoLiveStreaming成功放入本地")
        },
        mPutVideoLiveStreaming: function (state, value) {
            state.videoLiveStreaming = value
            // console.log("mPutVideoLiveStreaming", state.videoLiveStreaming)
            let videoLiveStreaming = JSON.stringify(value)
            localStorage.setItem("videoLiveStreaming",videoLiveStreaming)
            console.log("videoLiveStreaming成功放入本地")
        }
    },
    state: {
        videoMain: {},
        videoExtension: {},
        videoAimtron: {},
        videoCompetition: {},
        videoLiveStreaming: {}
    },
    getters: {},
}