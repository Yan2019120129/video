import {hintLogin, verify} from "@/utility/messageHint";
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Video from '@/views/VideoPlay/Video'
import VideoPlay from "@/views/VideoPlay/VideoPlay";
import cutPicture from "@/views/VideoPlay/cutPicture.vue";
import MyVideo from "@/views/VideoPlay/MyVideo";
import UserCentre from "@/views/UserCollect/UserCentre";
import UserMessage from "@/views/UserCentre/UserMessage";
import Upload from "@/views/UserCollect/Upload";
import Main from "@/components/Main";
import VideoUpload from "@/views/VideoPlay/VideoUpload";
import Account from "@/views/UserCentre/particular/Account";
import BackgroundAnimation from "@/components/BiliHead/MenuAndSearch/BackgroundAnimation";
import UserMessageMain from "@/views/UserCentre/particular/UserMessageMain";
import VIP from "@/views/UserCentre/particular/VIP";
import MyMessage from "@/views/UserCentre/particular/MyMessage";
import {getToken} from "@/utility/manageDate";
import Navigation from "@/views/Home/Navigation";
import UserHead from "@/views/UserCentre/particular/UserHead";
import VideoList from "@/views/VideoPlay/VideoList";

const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/main",
            meta: {isAuth: false, jurisdiction: "common",}
        },
        {
            name: 'main',
            path: '/main',
            components: {
                router_app: Main
            },
            redirect: "/main/home",
            meta: {isAuth: false, jurisdiction: "common",},
            children: [
                {
                    name: 'home',
                    path: 'home',
                    meta: {isAuth: false, jurisdiction: "common",},
                    components: {
                        router_main: Home
                    },
                },
                {
                    name: 'video',
                    path: 'video',
                    meta: {isAuth: false, jurisdiction: "common",},
                    components: {
                        router_main: Video
                    },
                },
                {
                    name: 'myVideo',
                    path: 'myVideo',
                    meta: {isAuth: false, jurisdiction: "common"},
                    components: {
                        router_main: MyVideo
                    },
                },
            ]
        },
        {
            name: 'videoPlay',
            path: '/videoPlay',
            meta: {isAuth: false, jurisdiction: "common",},
            components: {
                router_app: VideoPlay
            },
        },
        {
            name: 'cutPicture',
            path: '/cutPicture',
            meta: {isAuth: false, jurisdiction: "common",},
            components: {
                router_app: cutPicture
            },
        },        {
            name: 'VideoList',
            path: '/VideoList',
            meta: {isAuth: false, jurisdiction: "common",},
            components: {
                router_app: VideoList
            },
        },
        {
            name: 'userCentre',
            path: '/userCentre',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_app: UserCentre
            },
        },
        {
            name: 'userMessage',
            path: '/userMessage',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_app: UserMessage
            },
            redirect: "/userMessage/useMessageMain",
            children: [
                {
                    name: "useMessageMain",
                    path: "useMessageMain",
                    meta: {isAuth: true, jurisdiction: "commonUser"},
                    components: {
                        router_userMessage: UserMessageMain
                    },
                    redirect: "/userMessage/useMessageMain/myMessage",
                    children: [
                        {
                            name: "vip",
                            path: "vip",
                            meta: {isAuth: true, jurisdiction: "commonUserVIP"},
                            components: {
                                router_userMessageMain: VIP
                            },
                        },
                        {
                            name: "myMessage",
                            path: "myMessage",
                            meta: {isAuth: true, jurisdiction: "commonUser"},
                            components: {
                                router_userMessageMain: MyMessage
                            },
                        },
                        {
                            name: "userHead",
                            path: "userHead",
                            meta: {isAuth: true, jurisdiction: "commonUser"},
                            components: {
                                router_userMessageMain: UserHead
                            },
                        }
                    ]
                },
                {
                    name: 'account',
                    path: 'account',
                    meta: {isAuth: true, jurisdiction: "commonUser"},
                    components: {
                        router_userMessage: Account
                    },
                },
            ]
        }
        , {
            name: 'upload',
            path: '/upload',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_app: Upload
            },
        },
        {
            name: 'backgroundAnimation',
            path: '/backgroundAnimation',
            meta: {isAuth: false, jurisdiction: "common"},
            components: {
                router_app: BackgroundAnimation
            },
        },

        {
            name: 'videoUpload',
            path: '/videoUpload',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_main: VideoUpload
            },
        },
        {
            name: "userMessageMain",
            path: '/userMessageMain',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_app: UserMessageMain
            }
        },
        {
            name: "navigation",
            path: '/navigation',
            meta: {isAuth: true, jurisdiction: "commonUser"},
            components: {
                router_app: Navigation
            }
        },
    ]
})
let token = getToken()
// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach(async (to, from, next) => {
    console.log("路由token验证", token)
    // 判断是什么用户，能使用什么权限
    switch (to.meta["jurisdiction"]) {
        case "common": // 公用模块
            next()
            break
        case "commonUser": // 允许访问用户中心
            if (token) {
                if (await verify(token)) {
                    next()
                }
            } else {
                next("/")
                hintLogin()
            }
            break
        case "commonUserVIP": // 允许访问vip
            next()
            break
    }
})
// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    // document.title = to.meta.title || '硅谷系统'
})

export default router