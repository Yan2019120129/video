<template>
  <div class="Slideshow">
    <div class="wheelImg">
      <img src="./assets/img/1.jpg" alt="">
      <img src="./assets/img/2.jpg" alt="">
      <img src="./assets/img/3.png" alt="">
      <img src="./assets/img/4.jpg" alt="">
      <img src="./assets/img/1.jpg" alt="">
    </div>
    <div class="wheelImgWidth">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <h1>{{ time }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Slideshow',

  data() {
    return {
      time: 10,
    }
  }, mounted() {
    // let time = setInterval(() => {
    //   if (--this.time === 0) {
    //     window.location.href = 'https://www.baidu.com';
    //     clearInterval(time);
    //   }
    // }, 1000)
  }
}
</script>
<style>
:root {
  --firstWidth: 50px;
  --secondWidth: 50px;
  --thirdWidth: 50px;
  --fourthWidth: 50px;
}

.App {
  width: 800px;
  overflow: hidden;
  margin: auto;
}

.wheelImgWidth {
  background-color: red;
}

.wheelImgWidth ul {
  height: 80px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
}

.wheelImgWidth ul li {
  margin: 30px 5px;
  width: 30px;
  height: 5px;
  border-radius: 2.5px;
  background-color: white;
}

.wheelImgWidth ul li:nth-child(1) {
  width: var(--firstWidth)
}

.wheelImgWidth ul li:nth-child(2) {
  width: var(--secondWidth)
}

.wheelImgWidth ul li:nth-child(3) {
  width: var(--thirdWidth)
}

.wheelImgWidth ul li:nth-child(4) {
  width: var(--fourthWidth)
}

.wheelImg {
  display: flex;
  flex-direction: row;
  width: 100%;
  animation: wheelImg1 30s infinite;
}

.wheelImg img {
  width: 100%;
  height: 100%;
}

@keyframes wheelImg1 {
  0% {
    transform: translateX(800px);
  }

  2%, 26% {
    transform: translateX(0px);
  }

  28%, 52% {
    transform: translateX(-800px);
  }

  54%, 78% {
    transform: translateX(-1600px);
  }

  80%, 99.9% {
    transform: translateX(-2400px);
  }

  100% {
    transform: translateX(-3200px);
  }
}
</style>