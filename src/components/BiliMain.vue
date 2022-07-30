    <template>
    <div class="bili-main">
        <!-- div.grid-container>(div.item$ >(div.head{图片}+div.box-fool{标题}))*7 -->
        <div class="grid-container">
            <div class="item1 box">
                <img src="../assets/img/001.jpg" alt="">
            </div>
            <div class="item2 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
            <div class="item3 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
            <div class="item4 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
            <div class="item5 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
            <div class="item6 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
            <div class="item7 box">
                <div class="head">图片</div>
                <div class="box-fool">标题</div>
            </div>
        </div>
    </div>
</template>
    <script>
</script>
    <style>
    .grid-container {
        margin: 0px 10%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px 10px;
    }
    
    .item1 {
        /* grid-column-start: 1;
                        grid-column-end: 3;
                        grid-row-start: 1;
                        grid-row-end: 3; */
        grid-area: 1/1/3/3;
    }
    
    .item1 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    </style>