import VueRouter from 'vue-router'
import VideoView from '@/components/VideoView/VideoView'
export default new VueRouter({
    routes: [
        {
            name: 'VideoView',
            path:'/VideoView/VideoView',
            component:VideoView,
        }
    ]
})