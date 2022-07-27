import VueRouter from 'vue-router'
import VideoPlay from '../components/VideoPlay'
import Home from '../components/Home'
export default new VueRouter({
    routes: [
        {
            name: 'videoPlay',
            path: '/videoPlay',
            component: VideoPlay,
        }, {
            path: '/home',
            component: Home,
        }
    ]
})