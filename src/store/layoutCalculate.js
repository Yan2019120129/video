export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        // 计算页面尺寸能放得下多少个视频组件
        toPromoteContainer(state, value) {
            console.log("toPromoteContainer运行了")
            const getWindowInfo = () => {
                // state.TPHCitems = Math.trunc((value.clientWidth / (value.firstElementChild.clientWidth / 2)) * 2 - 4); // 计算容器内能存放多少个子元素， 父元素元素宽度除以子元素宽度
                // state.TPCitems = Math.trunc(value.clientWidth / 220);
                state.TPCitems=Math.trunc(value)
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
            console.log("getWindowInfo运行了")
            getWindowInfo();
        },
    },
    state: {
        TPHCitems: 0,
        TPCitems: 0,
    },
    getters: {},
}