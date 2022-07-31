    <template>
    <div class="bili-main">
        <!-- div.grid-container>(div.item$ >(div.head{图片}+div.box-fool{标题}))*7 -->
        <div class="grid-container">
            <div class="item1">
                <img src="../assets/img/001.jpg" alt="">
            </div>
            <div class="item2 box" v-for="index of 8">
                <div class="head"> <img class="box-img" src="../assets/img/001.jpg" alt=""></div>
                <div class="box-fool"><span>描述</span><span>标题</span></div>
            </div>
        </div>
        <!-- <div class="recommended">
            <div class="box">
                <div>
                    <img class="box-img" src="../assets/img/001.jpg" alt="">
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div> -->
    </div>
</template>
<script>
</script>
    <style>
    .bili-main {
        width: 100%;
        height: 500px;
    }
    
    .grid-container {
        height: 50vh;
        width: 100%;
        margin: 0 10%;
        display: grid;
        grid-template-columns: repeat(6, 200px);
        grid-gap: 20px 10px;
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
    
    .head {
        height: 70%;
    }
    
    .box-img {
        width: 100%;
        height: 100%;
    }
    
    .fool {
        height: 30%;
        width: 100%;
    }
    </style>