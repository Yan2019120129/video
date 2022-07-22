
document.querySelector(".play_menu_end").addEventListener("mouseenter", function (e) {
  console.log("mouseenter");
  document.getElementById("play_menu").style.cssText = 'opacity:1;'
  document.getElementById("bar1").style.cssText = 'opacity:0;'
})

document.querySelector(".play_menu_end").addEventListener("mouseleave", function () {
  console.log("mouseleave");
  document.getElementById("play_menu").style.cssText = 'opacity:0;'
  document.getElementById("bar1").style.cssText = 'opacity:1;'

})


document.querySelector(".play_menu_top").addEventListener("mouseenter", function (e) {
  var setTimeoutId2;
  console.log("mouseleaveTop");
  var play_menu_topStyle = document.getElementById("play_menu");
  play_menu_topStyle.style.cssText = 'opacity:1;'
  clearTimeout(setTimeoutId2);
  id2 = setTimeout(() => {
    play_menu_topStyle.style.cssText = 'opacity:0;'
    clearTimeout(id2);
    console.log("ok")
  }, 2000);
})

const debounce = function (func, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    const context = this
    const args = arguments
    timer = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}
var setTimeoutId;
function foo(e) {
  var play_menu_topStyle = document.getElementById("play_menu");
  document.getElementById("play_menu").style.cssText = 'opacity:1;'
  console.log("mousemoveTop")
  clearTimeout(setTimeoutId);
  setTimeoutId = setTimeout(() => {
    console.log("执行")
    play_menu_topStyle.style.cssText = 'opacity:0;';
    // clearTimeout(setTimeoutId);
  }, 2000);
}
document.querySelector(".play_menu_top").addEventListener("mousemove", debounce(foo, 10))
document.querySelector(".play_menu_top").addEventListener("mouseleave", function () {
  console.log("mouseleaveTop");
  document.getElementById("play_menu").style.cssText = 'opacity:0;'
})



var test = document.querySelector(".menu_bar").addEventListener("mousemove", function (e) {
  var i = e.pageX - document.querySelector(".play_body").offsetLeft;
  document.querySelector(".bar>a").style.left = i + "px";
});

let clearIntervalId;
document.getElementById("video").addEventListener("canplay", function () {
  videoTime();
})
function videoTime() {
  var vid_play = document.getElementById("video"); // 设置视频标签
  var totalTime = Math.ceil(vid_play.duration); // 获取视频总时间
  var nowTime = Math.ceil(vid_play.currentTime); // 获取视频播放时间
  document.querySelector('.barInside').style.width = nowTime / totalTime * 100 + '%'; // 设置进度条进度为百分之几
  document.querySelector('.bar1Inside').style.width = nowTime / totalTime * 100 + '%'; // 设置进度条进度为百分之几
  document.getElementsByClassName("menu_time")[0].innerHTML = isnull(parseInt(nowTime / 60), parseInt(nowTime % 60)) + "/" + isnull(parseInt(totalTime / 60), parseInt(totalTime % 60));
  function isnull(m, s) { // 判断分秒是否小于等于10，如果小于则添加‘0’得结果：01、02、03
    if (m >= 10) {
      var mIsNull = ''
    }
    else {
      var mIsNull = '0'
    }
    if (s >= 10) {
      var sIsNull = '';
    }
    else {
      var sIsNull = '0'
    }
    return mIsNull + m + ":" + sIsNull + s;
  }

}

document.querySelector('.menu_bar').addEventListener("click", function (e) { // 点击跳转指定的进度
  var i = e.pageX - document.querySelector(".play_body").offsetLeft; // e.pageX浏览器左边开始到当前鼠标x轴位置，play_body.offsetLeft文档距离e.pageX开始位置的距离，两者相减得鼠标在元素x轴上得位置
  var vid_play = document.getElementById("video");
  vid_play.currentTime = i / this.clientWidth * Math.ceil(vid_play.duration); // 计算视频实时进度，元素x轴距离除元素总距离的乘视频总时间得视频进度
  videoTime();
})

document.querySelector('.menu_play').addEventListener("click", fMenuPlay); // 播放按键点击监听。
document.querySelector('.play_menu_top').addEventListener("click", fMenuPlay); // 播放区域点击监听
function fMenuPlay(e) {
  var vid_play = document.getElementById("video"); // 获取播放器属性
  var menu_play = document.querySelector('.menu_play img') // 定义视频播放按键变量
  if (e && e.stopPropagation) { //
    // console.log(e.stopPropagation);
    e.stopPropagation(); // 阻止冒泡事件
    ifStoStar();
  } else {
    window.event.cancelBubble = true // 阻止冒泡事件
    ifStoStar();
  }
  function ifStoStar() {
    if (vid_play.paused) { // 判断是否开始播放是为true，否为false
      clearIntervalId = setInterval(videoTime, 1000);
      vid_play.play(); // .play()开始播放
      menu_play.setAttribute('src', "img/stopVideo.png");
      console.log(menu_play);
    } else {
      clearInterval(clearIntervalId); // 清楚定时器（暂停）
      vid_play.pause(); // .pause()停止播放
      menu_play.setAttribute('src', "img/startVideo.png");
      console.log(menu_play);
    }
  }
}
