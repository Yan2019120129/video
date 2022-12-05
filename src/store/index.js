import Vue from 'vue'
import Vuex from 'vuex'

import layoutCalculate from './layoutCalculate'
import login from './login'
import video from "@/store/video";
import system from "@/store/system";

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        layoutAbout: layoutCalculate,
        loginAbout: login,
        videoAbout: video,
        systemAbout: system,
    }
})