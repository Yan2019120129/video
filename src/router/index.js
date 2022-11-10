import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Video from '@/views/VideoPlay/Video'
import VideoPlay from "@/views/VideoPlay/VideoPlay";
import MyVideo from "@/views/VideoPlay/MyVideo";
import UserCentre from "@/views/UserCentre/UserCentre";

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/Home',
            components: {
                router_Video: Home
            },
        },
        {
            name: 'video',
            path: '/Video',
            components: {
                router_Video: Video
            },
        },
        {
            name: 'videoPlay',
            path: '/VideoPlay',
            components: {
                router_Video: VideoPlay
            },
        },
        {
            name: 'myVideo',
            path: '/myVideo',
            components: {
                router_Video: MyVideo
            },
        },
        {
            name: 'userCentre',
            path: '/userCentre',
            components: {
                router_Video: UserCentre
            },
        }
    ]
})

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫', to, from)
//     // if (to.meta.isAuth) { //判断是否需要鉴权
//     //     if (localStorage.getItem('school') === 'atguigu') {
//     //         next()
//     //     } else {
//     //         alert('学校名不对，无权限查看！')
//     //     }
//     // } else {
//     next()
//     // }
// })

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to, from) => {
//     console.log('后置路由守卫', to, from)
//     // document.title = to.meta.title || '硅谷系统'
// })

export default router