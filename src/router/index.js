import {verifyToken} from "@/api";
import {hintLogin} from "@/utility/messageHint";
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Video from '@/views/VideoPlay/Video'
import VideoPlay from "@/views/VideoPlay/VideoPlay";
import MyVideo from "@/views/VideoPlay/MyVideo";
import UserCentre from "@/views/UserCollect/UserCentre";
import UserMessage from "@/views/UserCentre/UserMessage";
import Upload from "@/views/UserCollect/Upload";
import Main from "@/components/Main";
import VideoUpload from "@/views/VideoPlay/VideoUpload";
import store from "@/store/index"
import Account from "@/views/UserCentre/particular/Account";
import BackgroundAnimation from "@/components/BiliHead/MenuAndSearch/BackgroundAnimation";
import UserMessageMain from "@/views/UserCentre/particular/UserMessageMain";
import VIP from "@/views/UserCentre/particular/VIP";
import MyMessage from "@/views/UserCentre/particular/MyMessage";

const token = store.state.loginAbout.token;
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
                    name: 'videoPlay',
                    path: 'videoPlay',
                    meta: {isAuth: false, jurisdiction: "common",},
                    components: {
                        router_main: VideoPlay
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
            name: 'userCentre',
            path: '/userCentre',
            meta: {isAuth: true, jurisdiction: "commonUser", token},
            components: {
                router_app: UserCentre
            },
        },
        {
            name: 'userMessage',
            path: '/userMessage',
            meta: {isAuth: true, jurisdiction: "commonUser", token},
            components: {
                router_app: UserMessage
            },
            redirect: "/userMessage/useMessageMain",
            children: [
                {
                    name: "useMessageMain",
                    path: "useMessageMain",
                    meta: {isAuth: true, jurisdiction: "commonUser", token},
                    components: {
                        router_userMessage: UserMessageMain
                    },
                    redirect: "/userMessage/useMessageMain/myMessage",
                    children: [
                        {
                            name: "vip",
                            path: "vip",
                            meta: {isAuth: true, jurisdiction: "commonUserVIP", token},
                            components: {
                                router_userMessageMain: VIP
                            },
                        },
                        {
                            name: "myMessage",
                            path: "myMessage",
                            meta: {isAuth: true, jurisdiction: "commonUser", token},
                            components: {
                                router_userMessageMain: MyMessage
                            },
                        }
                    ]
                },
                {
                    name: 'account',
                    path: 'account',
                    meta: {isAuth: true, jurisdiction: "commonUser", token},
                    components: {
                        router_userMessage: Account
                    },
                },
            ]
        }
        , {
            name: 'upload',
            path: '/upload',
            meta: {isAuth: true, jurisdiction: "commonUser", token},
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
            meta: {isAuth: true, jurisdiction: "commonUser", token},
            components: {
                router_main: VideoUpload
            },
        },
        {
            name: "userMessageMain",
            path: '/userMessageMain',
            meta: {isAuth: true, jurisdiction: "commonUser", token},
            components: {
                router_app: UserMessageMain
            }
        },
    ]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log(to.meta.jurisdiction)
    // 判断是什么用户，能使用什么权限
    switch (to.meta.jurisdiction) {
        case "common": // 公用模块
            next()
            break
        case "commonUser": // 允许访问用户中心
            console.log(to.meta.token);
            if (to.meta.token != null) {
                verifyToken(token).then(
                    req => {
                        if (!req.data.state) {
                            store.dispatch("loginAbout/aIfLogin", false).then()// 设置登录状态为未登录
                            hintLogin() // 提示登录信息
                        }
                        console.log("返回信息", req.data);
                        next()
                        return
                    },
                    error => {
                        store.dispatch("loginAbout/aIfLogin", false).then(); // 设置登录状态为未登录
                        console.log("返回信息", error.response.data);
                        console.log("没有权限");
                        hintLogin()
                        // next()
                        next({path: '/'})
                        return
                    }
                );
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