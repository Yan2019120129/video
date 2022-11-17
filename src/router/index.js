import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Video from '@/views/VideoPlay/Video'
import VideoPlay from "@/views/VideoPlay/VideoPlay";
import MyVideo from "@/views/VideoPlay/MyVideo";
import UserCentre from "@/views/UserCentre/UserCentre";

const router = new VueRouter({
    routes: [{
        name: 'Home', path: '/Home', components: {
            router_Video: Home
        },
    }, {
        name: 'video', path: '/Video', components: {
            router_Video: Video
        },
    }, {
        name: 'videoPlay', path: '/VideoPlay', components: {
            router_Video: VideoPlay
        },
    }, {
        name: 'myVideo', path: '/myVideo', components: {
            router_Video: MyVideo
        },
    }, {
        name: 'userCentre', path: '/userCentre', components: {
            router_Video: UserCentre
        },
    }]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token') != null) {
        next()
    } else if (to.path == "/Home") {
        next()
    } else if (to.path == "/VideoPlay") {
        next()
    }
})
// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    // document.title = to.meta.title || '硅谷系统'
})

export default router