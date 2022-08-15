    <template>
    <div class="bili-main">
        <router-view></router-view>
    </div>
</template>
<script>
import Home from './Home'
export default {
    name: 'BiliMain',
    components: {
        Home
    }, data() {
        return {
            videoData: null,
        }
    }, mounted() {
    }, methods: {
    }
} 
</script>
    <style scoped>
    </style>