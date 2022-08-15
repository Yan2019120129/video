import VueRouter from 'vue-router'
import VideoView from '@/components/VideoView/VideoView'
import VideoPlay from '@/components/BiliMain/VideoPlay'
import Home from '@/components/Home'
export default new VueRouter({
    routes: [
        {
            name: 'VideoView',
            path:'/VideoView/VideoView',
            component:VideoView,
        },
        {
            name:'Home',
            path:'/Home',
            component:Home,
        },
        {
            name:'videoPlay',
            path:'/VideoPlay',
            component:VideoPlay,
        },
    ]
})