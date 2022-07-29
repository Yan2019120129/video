<template>
    <div class="bili-main">
        <div class="bili-main_banner">
            <div class="bili-main_banner_left">
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
            </div>
            <div class="bili-main_banner_middle">
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>测试</button>
                <button>中故宫</button>
            </div>
            <div class="bili-main_banner_right">
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
                <div>
                    <img src="" alt="">
                    <a href="">测试</a>
                </div>
            </div>
        </div>
        <div class="bili-main_main">
            <div>大图</div>
            <ul>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <a>测试2</a>
                    <a>测试3</a>
                </li>
                <li>
                    <img src="" alt=""><br>
                    <span href="">测试</span>
                    <span>测试2</span>
                    <a>测试3</a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
</script>
<style>
.bili-main_banner {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.bili-main_banner>div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 10px;
}

.bili-main_banner_left {
    width: 15%;
}

.bili-main_banner_middle {
    width: 70%;
}

.bili-main_banner_middle>button {
    margin: 3px;
    min-width: 4vw;
}

.bili-main_banner_right {
    width: 15%;
}

.bili-main_main {
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.bili-main_main>div {
    width: 30%;
    height: 30vh;
    background-color: rgb(0, 162, 255);
}

.bili-main_main>ul {
    width: auto;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    flex-wrap: wrap;
    margin: 0px;
    padding: 0px;
    background-color: rgb(255, 145, 0);
}
.bili-main_main>ul li{
    margin: 0px auto;
    width: 15vw;
    height: 10vh;
}

.bili-main_main img {
    height: 100%;
    width: 100%;
    background-color: aqua;
}
</style>