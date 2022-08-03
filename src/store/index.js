import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {

}

const mutations = {
    toPromoteContainer(state, value) {
        console.log("toPromoteHeadContainer");
        const getWindowInfo = () => {
            state.TPHCitems = Math.trunc((value.clientWidth / (value.firstElementChild.clientWidth / 2)) * 2 - 4); // 计算容器内能存放多少个子元素， 父元素元素宽度除以子元素宽度
            state.TPCitems = Math.trunc(value.clientWidth / 220);
        };
        const debounce = (fn, delay) => {
            let timer;
            return function () {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    fn();
                    clearTimeout(timer);
                }, delay);
            }
        };
        const cancalDebounce = debounce(getWindowInfo, 500);
        window.addEventListener('resize', cancalDebounce);
        getWindowInfo();
    },
}

const state = {
    TPHCitems: 0,
    TPCitems: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})