    <template>
    <div class="bili-main">
        <!-- div.grid-container>(div.item$ >(div.head{图片}+div.box-fool{标题}))*7 -->
        <div class="grid-container" ref="g" v-resize="resize">
            <div class="item1">
                <img src="../assets/img/001.jpg" alt="">
            </div>
            <VideoView v-for="index in this.items"></VideoView>
        </div>
        <ToPromote></ToPromote>
    </div>
</template>
<script>
import VideoView from './VideoView/VideoView'
import ToPromote from './BiliMain/ToPromote'
export default {
    name: 'BiliMain',
    components: {
        VideoView,ToPromote
    }, data() {
        return {
            grid: null,
            gridItem: null,
            items: 0,
        }
    }, mounted() {
        this.grid = this.$refs.g;
        this.gridItem = this.$refs.g.firstChild;
        console.log(this.grid.clientWidth);
        console.log(this.gridItem.clientWidth / 2);
        let gridWidth = this.grid.clientWidth;
        let gridItemWidth = this.gridItem.clientWidth / 2;
        let items = Math.trunc((gridWidth / gridItemWidth) * 2 - 4);
        this.items = items;
        console.log(items);
    }, methods: {
        resize() {
            let gridWidth = this.grid.clientWidth;
            let gridItemWidth = this.gridItem.clientWidth / 2;
            let items = Math.trunc((gridWidth / gridItemWidth) * 2 - 4);
            this.items = items;
            console.log(items);
        }
    },
    directives: {  // 使用局部注册指令的方式
        resize: { // 指令的名称
            bind(el, binding) { // el为绑定的元素，binding为绑定给指令的对象
                let width = '', height = '';
                function isReize() {
                    const style = document.defaultView.getComputedStyle(el);
                    if (width !== style.width || height !== style.height) {
                        binding.value();  // 关键
                    }
                    width = style.width;
                    height = style.height;
                }
                el.__vueSetInterval__ = setInterval(isReize, 300);
            },
            unbind(el) {
                clearInterval(el.__vueSetInterval__);
            }
        }
    }
}
</script>
    <style scoped>
    .bili-main {
        width: 100%;
    }
    
    .grid-container {
        height: 420px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-rows: repeat(2, minmax(200px, 1fr));
        grid-gap: 20px 10px;
        overflow: hidden;
    }
    
    .box {
        display: flex;
        flex-direction: column;
    }
    
    .item1 {
        grid-area: 1/1/3/3;
    }
    
    .item1 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    </style>