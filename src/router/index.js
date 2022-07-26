import VueRouter from 'vue-router'
import Video from '../components/Video'
import Home from '../components/Home'
export default new VueRouter({
    routes:[
        {
            path:'/Video',
            component:Video
        },{
            path:'/Home',
            component:Home,
        }
    ]
})