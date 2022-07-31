    <template>
    <div class="box" v-for="index of 8">
        <div class="head"> <video class="box-img" preload="auto" src="@/assets/video/test.mp4"></video></div>
        <div class="middle" style="text-overflow:ellipsis;">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
        <div class="foot"><a>标题</a></div>
    </div>
</template>
<script>
</script>
    <style>
    .box {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
    }
    
    .head {
        height: 70%;
    }
    
    .box-img {
        width: 100%;
        height: 100%;
    }
    
    .middle {
        /* 在恰当的断字点进行换行 */
        word-break: break-all;
        /* 超出范围隐藏 */
        overflow: hidden;
        /* 文字超出用省略号 */
        text-overflow: ellipsis;
        /* 盒子模型 */
        display: -webkit-box;
        /* 显示的文本行数 */
        -webkit-line-clamp: 2;
        /* 子元素的垂直排列方式 */
        -webkit-box-orient: vertical;
    }
    
    .fool {
        height: 5%;
        width: 100%;
    }
    </style>