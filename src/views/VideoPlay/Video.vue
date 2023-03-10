<template>
  <div>
    <div class="play_body" ref="vp">
      <video id="video" ref="v">
        <slot></slot>
        您的浏览器不支持 HTML5 video 标签。
      </video>
      <div id="play_menu">
        <div class="play_menu_top">
          <div ref="container" class="barrage_shade">
            <!--            <div v-for="track in tracks" style="height: 30px" class="track_property"></div>-->
            <!--            @animationend动画完成时调用函数-->
            <div
                v-for="bullet in bullets"
                :id="bullet.id"
                :key="bullet.id"
                :style="{top:bullet.track.offset+'px'}"
                :class="['bullet_'+bullet.status]"
                @animationend="done(bullet)"
                class="bullet_location">
              {{ bullet.content }}
            </div>
          </div>
        </div>
        <div class="play_menu_end">
          <div class="menu_bar">
            <div class="bar">
              <a></a>
              <div class="barInside"></div>
              <img src="@/assets/img/tv.png" alt="">
            </div>
          </div>
          <div class="menu_bottom">
            <button class="menu_play" @click="menuPlay">
              <img v-show="isPlay" src="@/assets/img/startVideo.png">
              <img v-show="!isPlay" src="@/assets/img/stopVideo.png">
            </button>
            <button class="menu_time">00:00/00:00</button>
            <button class="menu_aut"><b>自动</b></button>
            <button class="menu_speed"><b>倍速</b></button>
            <button class="menu_srt">
              <b>字幕</b>
              <div class="barrage"></div>
            </button>
            <button class="menu_voice">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="videoSvg" viewBox="0 0 100 79">
                <title>声音</title>
                <path
                    d="m60.60481,10.6048a3.67691,3.67691 0 1 0 0,7.39752a31.99766,31.99766 0 0 1 0,64.03911a3.67691,3.67691 0 1 0 0,7.35374a39.39519,39.39519 0 0 0 0,-78.79037z"
                    id="svg_1" p-id="1367"/>
                <path
                    d="m66.09556,73.13432zm-18.15176,-58.94894l-24.05538,15.99283l-17.18246,0a7.09325,7.09325 0 0 0 -6.69666,7.4457l0,24.80443a7.09325,7.09325 0 0 0 6.69658,7.40164l17.18254,0l24.09945,15.99291c3.17214,2.11471 5.77158,0.48457 5.77158,-3.6128l0,-64.41198c-0.04414,-4.14136 -2.6435,-5.72743 -5.81564,-3.61273z"
                    id="svg_2" p-id="1368"/>
                <path
                    d="m61.75982,64.42554a3.40381,3.40381 0 1 0 0,6.84815a21.27369,21.27369 0 0 0 0,-42.54738a3.40381,3.40381 0 1 0 0,6.84815a14.42554,14.42554 0 0 1 0,28.89161l0,-0.04053z"
                    id="svg_3" p-id="1369"/>
              </svg>
            </button>
            <button class="menu_setting">
              <svg id="setting" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" t="1658302397130"
                   class="icon" version="1.1" p-id="2406">
                <g id="settingSvg_1">
                  <title>设置</title>
                  <path
                      d="m880.037,461.451c-2.896,-16.078 -18.396,-32.444 -34.473,-36.066l-12.021,-2.751c-28.244,-8.547 -53.302,-27.232 -69.234,-54.751c-15.933,-27.665 -19.701,-59.097 -12.748,-87.917l3.767,-11.299c4.779,-15.643 -1.45,-37.223 -14.049,-47.943c0,0 -11.299,-9.559 -43.164,-27.954c-31.866,-18.25 -45.626,-23.319 -45.626,-23.319c-15.499,-5.648 -37.224,-0.289 -48.522,11.733l-8.403,8.98c-21.436,20.278 -50.26,32.589 -82.123,32.589s-60.976,-12.454 -82.415,-32.878l-8.114,-8.692c-11.153,-12.021 -33.022,-17.378 -48.522,-11.732c0,0 -13.904,5.069 -45.77,23.318c-31.866,18.54 -43.018,28.099 -43.018,28.099c-12.6,10.574 -18.829,32.01 -14.049,47.798l3.479,11.442c6.807,28.822 3.185,60.11 -12.748,87.772s-41.273,46.497 -69.659,54.899l-11.587,2.606c-15.933,3.622 -31.577,19.844 -34.473,36.066c0,0 -2.606,14.483 -2.606,51.273s2.606,51.273 2.606,51.273c2.896,16.222 18.395,32.444 34.473,36.066l11.299,2.606c28.388,8.403 53.88,27.232 69.813,55.04c15.933,27.666 19.701,59.097 12.748,87.918l-3.33,11.153c-4.779,15.643 1.45,37.223 14.048,47.943c0,0 11.299,9.559 43.164,27.954s45.625,23.319 45.625,23.319c15.499,5.647 37.224,0.289 48.522,-11.733l7.966,-8.547c21.579,-20.423 50.549,-32.878 82.56,-32.878s61.121,12.6 82.56,33.022l7.966,8.547c11.153,12.021 33.022,17.383 48.522,11.732c0,0 13.904,-5.069 45.77,-23.318c31.866,-18.396 43.018,-27.954 43.018,-27.954c12.6,-10.574 18.829,-32.154 14.048,-47.943l-3.479,-11.588c-6.807,-28.677 -3.185,-59.964 12.748,-87.484c15.933,-27.666 41.424,-46.638 69.813,-55.04l11.299,-2.606c15.933,-3.622 31.577,-19.844 34.473,-36.066c0,0 2.606,-14.483 2.606,-51.273c-0.152,-36.937 -2.759,-51.421 -2.759,-51.421l-0.001,0.005zm-366.587,198.576c-81.256,0 -147.303,-65.901 -147.303,-147.303c0,-81.256 65.901,-147.159 147.303,-147.159c81.256,0 147.303,65.901 147.303,147.303c-0.148,81.256 -66.049,147.159 -147.303,147.159z"
                      p-id="2407" id="svg_1"/>
                  <ellipse cx="512" cy="512" id="svg_2" rx="88" ry="88"/>
                </g>
              </svg>
            </button>
            <button class="menu_pip">
              <svg id="inPicture" viewBox="0 0 275 275" xmlns="http://www.w3.org/2000/svg" p-id="1406"
                   version="1.1" class="icon" t="1658316973927">
                <title>开启画中画</title>
                <path stroke="null" id="inPictureSvg_1" p-id="1407"
                      d="m261.02121,0a13.73796,13.73796 0 0 1 13.73796,13.73796l0,96.16571l-27.47592,0l0,-82.42775l-219.80733,0l0,192.33142l82.42775,0l0,27.47592l-96.16571,0a13.73796,13.73796 0 0 1 -13.73796,-13.73796l0,-219.80733a13.73796,13.73796 0 0 1 13.73796,-13.73796l247.28325,0zm0,137.37958a13.73796,13.73796 0 0 1 13.73796,13.73796l0,82.42775a13.73796,13.73796 0 0 1 -13.73796,13.73796l-109.90367,0a13.73796,13.73796 0 0 1 -13.73796,-13.73796l0,-82.42775a13.73796,13.73796 0 0 1 13.73796,-13.73796l109.90367,0z"/>
                <path stroke="null" id="inPictureSvg_2" p-id="1407"
                      d="m66.49267,47.7737l30.91041,30.91041l28.06665,-28.06665l0,75.55877l-75.55877,0l28.06665,-28.06665l-30.91041,-30.9104l19.42547,-19.42548z"/>
              </svg>
            </button>
            <button class="menu_wid">
              <svg id="widescreen" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" t="1658316973927"
                   class="icon" version="1.1" p-id="1406">
                <rect rx="50" id="svg_8" height="500" width="800" y="0" x="0"/>
                <title>宽屏模式</title>
                <path id="widescreenSvg_1"
                      d="m523,331.96376l96.42799,-81.65033l-96.42799,-81.65091l55.11348,-46.66252l151.55317,128.31343l-151.55317,128.35324l-55.11348,-46.70291z"
                      stroke="#000" fill="#000000"/>
                <path stroke="#000" stroke-width="0" id="widescreenSvg_2"
                      d="m300.97375,167.89151l-107.78166,82.1134l107.78166,82.11333l-61.59609,46.95493l-169.37765,-129.06824l169.37765,-129.07811l61.59609,46.96469z"
                      fill="#000000"/>
              </svg>
            </button>
            <button class="menu_tmlfull"  @click="toggleFullScreen">
              <svg id="fullScreen" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" p-id="2261"
                   version="1.1" class="icon" t="1658326893246">
                <title>网页全屏</title>
                <rect rx="100" id="svg_5" height="600" width="700" y="0" x="0"/>
                <path stroke="#000" fill="#000000" id="fullScreenSvg_1" p-id="2262"
                      d="m234.48725,516.38469l-127.5898,0c-19.13847,0 -31.89745,-12.75898 -31.89745,-31.89745l0,-127.5898c0,-19.13847 12.75898,-31.89745 31.89745,-31.89745s31.89745,12.75898 31.89745,31.89745l0,95.69235l95.69235,0c19.13847,0 31.89745,12.75898 31.89745,31.89745s-12.75898,31.89745 -31.89745,31.89745z"/>
                <path stroke="null" fill="#000000" id="fullScreenSvg_2" p-id="2265"
                      d="m108,271.00008c-19.60001,0 -33,-13.06668 -33,-32.66669l0,-130.66671c0,-19.60001 13.06667,-32.66668 32.66668,-32.66668l130.66671,0c19.60001,0 32.66669,13.06667 32.66669,32.66668s-13.06668,32.66668 -32.66669,32.66668l-98.00003,0l0,98.00003c0,19.60001 -12.73335,32.66669 -32.33336,32.66669z"/>
                <path stroke="null" fill="#000000" id="fullScreenSvg_3" p-id="2263"
                      d="m590.89749,523.077l-132.71799,0c-19.9077,0 -33.1795,-13.2718 -33.1795,-33.1795s13.2718,-33.17949 33.1795,-33.17949l99.5385,0l0,-99.5385c0,-19.9077 13.27179,-33.1795 33.17949,-33.1795s33.1795,13.2718 33.1795,33.1795l0,132.71799c0,19.9077 -13.2718,33.1795 -33.1795,33.1795z"/>
                <path stroke="#000000" fill="#000000" id="fullScreenSvg_4" p-id="2264"
                      d="m590.8975,274.077c-19.9077,0 -33.17949,-13.2718 -33.17949,-33.1795l0,-99.5385l-99.5385,0c-19.90771,0 -33.17951,-13.2718 -33.17951,-33.1795s13.2718,-33.1795 33.17951,-33.1795l132.71799,0c19.9077,0 33.1795,13.2718 33.1795,33.1795l0,132.718c0,19.9077 -13.2718,33.1795 -33.1795,33.1795z"/>
              </svg>
            </button>
            <button class="menu_full" @click="fullScreen(!ifFullScree)"><b>全屏</b></button>
          </div>
        </div>
      </div>
      <div id="bar1">
        <div class="bar1Inside"></div>
      </div>
    </div>
    <div class="play_video_message play_video_message_center_horizontally">
      <span>791人在观看,已装配2011条弹幕</span>
      <div class="play_video_message_center_horizontally">
        <!--        <img class="play_video_message_img " src="@/assets/svg/videoPlay/openBulletButton.svg">-->
        <!--        <img class="play_video_message_img " src="@/assets/svg/videoPlay/settingBulletButton.svg">-->
        <svg v-if="!if_show_bullet" @click="ifShowBullet" viewBox="0 0 1186 1024" width="40" height="40"
             class="play_video_message_svg "
             version="1.1">
          <g>
            <title>Layer 1</title>
            <path
                d="m869.28218,780.99942zm-218.26384,236.68519l-453.89604,0c-106.82482,0 -193.72573,-86.90091 -193.72573,-193.72573l0,-623.9355c0,-106.81299 86.90091,-193.7139 193.72573,-193.7139l623.90001,0c106.82482,0 193.72572,86.90091 193.72572,193.7139l0,246.61164a25.11785,25.11785 0 0 1 -50.22387,0l0,-246.61164a143.65566,143.65566 0 0 0 -143.50185,-143.49003l-623.90001,0a143.65566,143.65566 0 0 0 -143.50186,143.49003l0,623.9355a143.66749,143.66749 0 0 0 143.50186,143.50185l453.89604,0a25.11785,25.11785 0 1 1 0,50.22388z"
                id="svg_1"/>
            <path
                d="m414.56978,530.28527s0,12.94344 -0.55607,18.56331c-6.75567,132.19113 -13.49951,182.20204 -28.6909,199.6887c-9.55969,11.25157 -20.24336,15.17956 -36.55872,16.87144c-13.49952,1.12397 -40.49855,1.12397 -67.49758,-0.5679a101.08664,101.08664 0 0 0 -13.49951,-41.05462c27.5551,2.81585 54.56596,3.37192 65.24963,3.37192c9.00362,0 14.06741,-1.12397 19.68728,-6.18777c9.55969,-10.64817 15.74746,-51.18221 21.36733,-153.55846l-114.76362,0c3.93982,-42.74649 6.18777,-111.36804 6.18777,-163.11815l108.55219,0l0,-86.08455l-116.96425,0l0,-37.65903l156.93038,0l0,161.42628l-112.50384,0c-0.55607,29.81487 -1.68005,61.3098 -2.80402,88.30883l115.86393,0zm346.49149,133.87117l-145.67881,0l0,104.11545l-42.19042,0l0,-104.11545l-150.74261,0l0,-37.68269l150.74261,0l0,-46.14208l-118.11188,0l0,-207.04777l156.93038,0c21.93523,-32.6189 47.24239,-81.55316 61.86587,-117.55581l42.19042,13.49952c-18.56331,34.87867 -41.06644,74.25324 -60.75373,104.05629l81.56499,0l0,207.04777l-121.49563,0l0,46.14208l145.67881,0l0,37.68269zm-227.79987,-300.92915c-10.1276,-24.18318 -33.1868,-62.43377 -53.99806,-89.4328l33.74287,-15.17956c21.37916,26.99903 44.43837,62.98985 54.56596,87.18486l-34.31077,17.4275zm-39.97797,97.31246l79.87312,0l0,-53.43016l-79.87312,0l0,53.43016zm79.90861,86.01356l0,-53.95074l-79.90861,0l0,53.95074l79.90861,0zm123.75541,-139.49104l-81.56499,0l0,53.47748l81.56499,0l0,-53.47748zm0,85.49298l-81.56499,0l0,53.99806l81.56499,0l0,-53.99806z"
                id="svg_2"/>
            <path
                d="m944.60449,998.99966a210.01507,210.01507 0 1 1 148.50212,-61.51295a208.65539,208.65539 0 0 1 -148.50212,61.51295zm0,-376.64291c-91.87584,0 -166.63806,74.752 -166.63806,166.63806s74.752,166.63806 166.63806,166.63806s166.63806,-74.74177 166.63806,-166.63806s-74.76221,-166.63806 -166.63806,-166.63806z"
                id="svg_3" stroke="null"/>
            <rect x="926.88275" y="618.17472" width="37.49962" height="355.20043" id="svg_8"
                  stroke="null"
                  transform="rotate(-40.6899 945.632 795.775)"/>
          </g>
        </svg>
        <svg v-if="if_show_bullet" @click="ifShowBullet" viewBox="0 0 1186 1024" version="1.1"
             class="play_video_message_svg "
             width="40" height="40">
          <path
              d="M921.49273 818.075326l-55.607116-43.385382-24.538118 19.710948 96.034672 97.300622c16.563822-42.178589 68.881836-124.607265 132.794525-183.172206l-5.91565-13.535009c-69.615377 42.521697-120.135033 96.164817-142.827469 123.045533zM647.621769 1011.375126H193.725727C86.900908 1011.375126 0 924.474218 0 817.649399V193.713896C0 86.900908 86.900908 0 193.725727 0h623.90001c106.824819 0 193.725727 86.900908 193.725726 193.713896v246.611643a25.117853 25.117853 0 0 1-50.223873 0V193.713896A143.65566 143.65566 0 0 0 817.625737 50.223874H193.725727A143.65566 143.65566 0 0 0 50.223874 193.713896v623.935503a143.667491 143.667491 0 0 0 143.501853 143.501853h453.896042a25.117853 25.117853 0 1 1 0 50.223874z"
          ></path>
          <path
              d="M411.185044 523.961008s0 12.943444-0.556071 18.563312c-6.755673 132.191129-13.499515 182.202039-28.690906 199.688702-9.559691 11.251568-20.243356 15.17956-36.55872 16.871436-13.499515 1.123974-40.498544 1.123974-67.497574-0.567903a101.086638 101.086638 0 0 0-13.499515-41.054615c27.555101 2.81585 54.565961 3.371921 65.249627 3.371921 9.00362 0 14.067417-1.123974 19.687285-6.187771 9.559691-10.648171 15.747462-51.182209 21.36733-153.558459h-114.763622c3.939823-42.746491 6.187771-111.368039 6.18777-163.11815h108.552189v-86.084548h-116.964244v-37.659032h156.93038v161.426274h-112.503844c-0.556071 29.814879-1.680045 61.309803-2.804018 88.308833zM757.676533 657.832182H611.997721v104.115451h-42.190421v-104.115451H419.064691v-37.682695h150.742609v-46.142075h-118.11188v-207.047772h156.93038c21.935233-32.618898 47.242386-81.55316 61.865874-117.555809l42.19042 13.499514c-18.563312 34.878676-41.066447 74.253247-60.753732 104.056295h81.564991v207.047772H611.997721v46.142075H757.676533zM529.876658 356.903034c-10.127594-24.18318-33.1868-62.433777-53.998059-89.432806l33.742872-15.17956c21.379161 26.999029 44.438368 62.989848 54.565961 87.184859z m-39.977967 97.312453h79.873115v-53.430157h-79.873115z m79.908609 86.01356v-53.950734h-79.908609v53.950734z m123.755411-139.491042h-81.56499v53.477482h81.56499z m0 85.492983h-81.56499v53.998059h81.56499z"
          ></path>
          <path
              d="M943.711914 1023.999124a243.050422 243.050422 0 1 1 171.861482-71.188939 241.476859 241.476859 0 0 1-171.861482 71.188939z m0-435.888801c-106.327904 0-192.850211 86.510475-192.850211 192.850211s86.510475 192.850211 192.850211 192.850211 192.850211-86.498644 192.850211-192.850211-86.522306-192.850211-192.850211-192.850211z"
          ></path>
        </svg>
        <svg viewBox="0 0 1186 1024" width="20" height="20"
             class="play_video_message_svg "
             version="1.1">
          <g>
            <title>Layer 1</title>
            <g id="svg_5">
              <path
                  d="m887.80073,780.99945zm-218.26384,236.68519l-453.89604,0c-106.82482,0 -193.72573,-86.90091 -193.72573,-193.72573l0,-623.9355c0,-106.81299 86.90091,-193.7139 193.72573,-193.7139l623.90001,0c106.82482,0 193.72572,86.90091 193.72572,193.7139l0,246.61164a25.11785,25.11785 0 0 1 -50.22387,0l0,-246.61164a143.65566,143.65566 0 0 0 -143.50185,-143.49003l-623.90001,0a143.65566,143.65566 0 0 0 -143.50186,143.49003l0,623.9355a143.66749,143.66749 0 0 0 143.50186,143.50185l453.89604,0a25.11785,25.11785 0 1 1 0,50.22388z"
                  id="svg_1"/>
              <path
                  d="m433.08833,530.2853s0,12.94344 -0.55607,18.56331c-6.75567,132.19113 -13.49951,182.20204 -28.6909,199.6887c-9.55969,11.25157 -20.24336,15.17956 -36.55872,16.87144c-13.49952,1.12397 -40.49855,1.12397 -67.49758,-0.5679a101.08664,101.08664 0 0 0 -13.49951,-41.05462c27.5551,2.81585 54.56596,3.37192 65.24963,3.37192c9.00362,0 14.06741,-1.12397 19.68728,-6.18777c9.55969,-10.64817 15.74746,-51.18221 21.36733,-153.55846l-114.76362,0c3.93982,-42.74649 6.18777,-111.36804 6.18777,-163.11815l108.55219,0l0,-86.08455l-116.96425,0l0,-37.65903l156.93038,0l0,161.42628l-112.50384,0c-0.55607,29.81487 -1.68005,61.3098 -2.80402,88.30883l115.86393,0zm346.49149,133.87117l-145.67881,0l0,104.11545l-42.19042,0l0,-104.11545l-150.74261,0l0,-37.68269l150.74261,0l0,-46.14208l-118.11188,0l0,-207.04777l156.93038,0c21.93523,-32.6189 47.24239,-81.55316 61.86587,-117.55581l42.19042,13.49952c-18.56331,34.87867 -41.06644,74.25324 -60.75373,104.05629l81.56499,0l0,207.04777l-121.49563,0l0,46.14208l145.67881,0l0,37.68269zm-227.79987,-300.92915c-10.1276,-24.18318 -33.1868,-62.43377 -53.99806,-89.4328l33.74287,-15.17956c21.37916,26.99903 44.43837,62.98985 54.56596,87.18486l-34.31077,17.4275zm-39.97797,97.31246l79.87312,0l0,-53.43016l-79.87312,0l0,53.43016zm79.90861,86.01356l0,-53.95074l-79.90861,0l0,53.95074l79.90861,0zm123.75541,-139.49104l-81.56499,0l0,53.47748l81.56499,0l0,-53.47748zm0,85.49298l-81.56499,0l0,53.99806l81.56499,0l0,-53.99806z"
                  id="svg_2"/>
            </g>
            <g stroke="null" stroke-width="3" id="svg_6">
              <path stroke="null" id="svg_3"
                    d="m941.1489,861.12893c37.37929,0 66.58186,-30.37067 66.58186,-67.74996c0,-37.37929 -30.37067,-67.74996 -66.58186,-67.74996c-37.37929,0 -66.58186,30.37067 -66.58186,67.74996c0,37.37929 30.37067,67.74996 66.58186,67.74996l0,0zm0,-18.68964c-26.86636,0 -49.06032,-22.19395 -49.06032,-49.06032c0,-26.86636 22.19395,-49.06032 49.06032,-49.06032c26.86636,0 49.06032,22.19395 49.06032,49.06032c0,26.86636 -22.19395,49.06032 -49.06032,49.06032l0,0z"/>
              <path stroke="null" id="svg_4"
                    d="m845.36446,913.69356c12.84913,10.51293 26.86636,18.68964 40.8836,24.53016c15.18534,-14.01723 35.04308,-22.19395 54.90083,-22.19395c21.02585,0 39.7155,8.17672 54.90083,22.19395c15.18534,-5.84051 29.20257,-14.01723 40.8836,-24.53016c-4.67241,-19.85775 -1.1681,-40.8836 8.17672,-59.57324c10.51293,-17.52154 26.86636,-31.53878 46.72411,-37.37929c1.1681,-8.17672 2.33621,-16.35344 2.33621,-24.53016c0,-8.17672 -1.1681,-16.35344 -2.33621,-24.53016c-19.85775,-5.84051 -36.21119,-19.85775 -46.72411,-37.37929c-10.51293,-17.52154 -12.84913,-39.7155 -8.17672,-59.57324c-12.84913,-10.51293 -26.86636,-18.68964 -40.8836,-24.53016c-15.18534,14.01723 -33.87498,22.19395 -54.90083,22.19395c-19.85775,0 -39.7155,-8.17672 -54.90083,-22.19395c-15.18534,5.84051 -29.20257,14.01723 -40.8836,24.53016c4.67241,19.85775 1.1681,40.8836 -8.17672,59.57324c-10.51293,17.52154 -26.86636,31.53878 -46.72411,37.37929c-1.1681,8.17672 -2.33621,16.35344 -2.33621,24.53016c0,8.17672 1.1681,16.35344 2.33621,24.53016c19.85775,5.84051 36.21119,19.85775 46.72411,37.37929c9.34482,18.68964 12.84913,39.7155 8.17672,59.57324m40.8836,42.0517c-19.85775,-7.00862 -38.54739,-17.52154 -54.90083,-32.70688c-2.33621,-2.33621 -3.50431,-5.84051 -2.33621,-8.17672c5.84051,-17.52154 3.50431,-36.21119 -5.84051,-51.39652c-9.34482,-16.35344 -23.36206,-26.86636 -40.8836,-30.37067c-3.50431,-1.1681 -5.84051,-3.50431 -5.84051,-7.00862c-2.33621,-10.51293 -3.50431,-22.19395 -3.50431,-32.70688c0,-10.51293 1.1681,-21.02585 3.50431,-32.70688c1.1681,-3.50431 3.50431,-5.84051 5.84051,-7.00862c17.52154,-4.67241 32.70688,-15.18534 40.8836,-30.37067c9.34482,-16.35344 10.51293,-33.87498 5.84051,-51.39652c-1.1681,-3.50431 0,-7.00862 2.33621,-8.17672c16.35344,-14.01723 35.04308,-24.53016 54.90083,-32.70688c3.50431,-1.1681 5.84051,0 8.17672,2.33621c12.84913,12.84913 29.20257,21.02585 46.72411,21.02585c17.52154,0 35.04308,-7.00862 46.72411,-21.02585c2.33621,-2.33621 5.84051,-3.50431 8.17672,-2.33621c19.85775,7.00862 38.54739,17.52154 54.90083,32.70688c2.33621,2.33621 3.50431,5.84051 2.33621,8.17672c-5.84051,17.52154 -3.50431,36.21119 5.84051,51.39652c9.34482,16.35344 23.36206,26.86636 40.8836,30.37067c3.50431,1.1681 5.84051,3.50431 5.84051,7.00862c2.33621,10.51293 3.50431,22.19395 3.50431,32.70688c0,10.51293 -1.1681,21.02585 -3.50431,32.70688c-1.1681,3.50431 -3.50431,5.84051 -5.84051,7.00862c-17.52154,4.67241 -32.70688,15.18534 -40.8836,30.37067c-9.34482,16.35344 -10.51293,33.87498 -5.84051,51.39652c1.1681,3.50431 0,7.00862 -2.33621,8.17672c-16.35344,14.01723 -35.04308,24.53016 -54.90083,32.70688c-3.50431,1.1681 -5.84051,0 -8.17672,-2.33621c-12.84913,-12.84913 -29.20257,-21.02585 -46.72411,-21.02585c-17.52154,0 -35.04308,7.00862 -46.72411,21.02585c-1.1681,1.1681 -3.50431,2.33621 -5.84051,2.33621c-1.1681,0 -2.33621,0 -2.33621,0z"/>
            </g>
          </g>

        </svg>
        <div class="bullet_hell_input">
          <p v-if="ifLogin">请输入你的弹幕</p>
          <p v-if="!ifLogin">请先<a href="">登录</a> 或 <a href="">注册</a></p>
          <input v-if="ifLogin" type="text">
          <input v-if="!ifLogin" type="text" readonly>
          <span>弹幕礼仪</span>
          <svg t="1667574164735" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2273" width="15" height="15">
            <path
                d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                p-id="2274"></path>
          </svg>
          <!--          <button @click="add(1)">装配</button>-->
          <button @click="run">发送</button>
          <!--          <button @click="auto">自动</button>-->
          <!--          <button @click="stop">停止</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentManager from "CommentCoreLibrary/dist/CommentCoreLibrary"
import "CommentCoreLibrary/dist/css/style.css"
import {mapState} from "vuex";
var CM = new CommentManager(document.getElementById('my-comment-stage'));
CM.init(); // 初始化

class Bullet {
  id
  status = "waiting"
  content = "我是弹幕,我是弹幕,我是弹幕"
  track

  constructor() {
    this.id = new Date().getTime() // getTime返回1970年1月1日午夜到指定时间的毫秒数
  }
}

// 轨道类
class Track {
  disabled = false
  offset = 0
}

const trackCount = 15 // 轨道的数量
const trackHeight = 30  // 轨道的高度

const randomSelect = (lenght) => { // 生成随机数
  // floor 舍去小数点进一为整数。
  // random 正数小数点大于0.5整数舍去小数进一。如Math.random(11.5)=12。random负数小数大于0.5
  return Math.floor(Math.random() * lenght)
}

export default {
  name: 'Video',
  components: {

  },

  props: [
    'videoSrc'
  ],
  data() {
    return {
      videoLable: null,
      isPlay: true,
      hello: "你好！！！",
      video: "",
      video_play: "",
      if_show_bullet: false,
      ifFullScree: false,
      timer: null,
      bullets: [], // 存储弹幕类
      tracks: [] // 存放轨道
    }
  },
  mounted() {
    this.video = this.$refs.v;
    this.video_play = this.$refs.vp
    console.log(this.$route.query);

    for (let i = 0; i < trackCount; i++) { // 计算生成多少条轨道
      let track = new Track()
      track.offset = i * trackHeight
      this.tracks.push(track) // push向数组末尾添加一个或多个数据并返回新的数组长度
    }
  },
  methods: {
    toggleFullScreen() {
      this.video_play = this.$refs.vp;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        this.video_play.requestFullscreen();
      }
    },
    ifShowBullet() {
      this.if_show_bullet = !this.if_show_bullet
      if (this.if_show_bullet) {
        this.auto()
      } else {
        this.stop()
      }
    },
    menuPlay() {
      if (this.video.paused) {
        this.video.play()
        this.isPlay = false;
        console.log("开始");
      } else {
        this.video.pause()
        this.isPlay = true;
        console.log("暂停");
      }
    },
    fullScreen() {
      if (document.fullscreenElement) {
        console.log("退出全屏")
        document.exitFullscreen()
      } else {
        console.log("全屏")
        this.video_play.requestFullscreen()
      }
    },
    add(i = 0) { // 装配弹幕
      let bullet = new Bullet()
      bullet.track = this.tracks[i] // 设置装配的轨道
      this.bullets.push(bullet)
    },
    run() { // 发射弹幕
      this.bullets.forEach((bullet) => {
        if (bullet.status == 'waiting') { // 如果弹幕已经装填则改成运动中
          bullet.status = 'running'
          bullet.track.disabled = true // 禁用轨道
          let w1 = this.$refs.container.getBoundingClientRect().width //容器长度
          let w2 = document.getElementById(bullet.id).getBoundingClientRect().width // 弹幕长度
          const delay = (w2 / (w1 + w2)) * 5 * 1000 // (弹幕长度/(容器长度+弹幕长度))*5秒=等于弹幕完全进入容器的长度
          setTimeout(() => {
            bullet.track.disabled = false // 重新启用
          }, delay)
        }
      })
    },
    done(bullet) { // 销毁弹幕
      bullet.status = 'done' // 改变弹幕的状态，使弹幕显示在视频外
      this.$nextTick(() => {
        const index = this.bullets.indexOf(bullet) // indexOf()返回字符传在数组中首次出现的位置
        if (index > -1) {
          this.bullets.splice(index, 1) // splice()用于添加或删除数组中的元素，删除数组中的元素
        }
      })
    },
    auto() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          // let index = randomSelect(trackCount)
          for (let i = 0; i < trackCount; i++) {
            console.log("轨道数", trackCount)
            console.log(i)
            let track = this.tracks[i]
            if (!track.disabled) {
              this.add(i)
              this.$nextTick(() => { // this.$nextTick 将回调延迟到下次DOM更新循环之后执行。
                this.run()
              })
              break
            }
          }
        }, 10)
      }
    },
    stop() {
      if (this.timer) {
        clearInterval(this.timer) // 清除定时器
        this.timer = null
      }
      this.bullets = [] // 清空大幕数组
    }
  },
  computed: {
    ...mapState("loginAbout", ["ifLogin"])
  }
}
</script>

<style scoped>
body {
  background-color: black;
}

.play_body {
  position: relative;
  height: 100%;
  width: 100%;
  align-content: center;
}

#video {
  width: 100%;
}

#play_menu {
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .5s .1s;
}

.play_menu_top {
  /*width: 903px;*/
  height: 88%;
}

/*弹幕------------------------------------------*/
.barrage_shade {
  height: 100%;
  width: 100%;
  /*background: red;*/
  position: relative;
  overflow: hidden;
}

.track_property {
  background: white;
  border: 1px solid red;
}

/*定位弹幕的状态*/
.bullet_location {
  position: absolute;
  white-space: nowrap;
  margin: 5px;
}

/*已装填的状态*/
.bullet_waiting {
  left: 100%;
}

.bullet_done {
  left: 0;
  transform: translate3d(-100%, 0, 0);
}

/*运动中的状态*/
@keyframes running {
  from {
    left: 100%;
    transform: translate3d(0, 0, 0);
  }
  to {
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }
}

.bullet_running {
  animation: running 5s linear;
}

/*弹幕输入框-----------------------------------------------*/
.play_video_message_center_horizontally {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.play_video_message {

  border: 1px solid #eeeeee;
  box-shadow: 1px 1px 2px #eeeeee;
  white-space: nowrap;
  font-size: 13px;
  padding: 10px;
  right: 0;
  left: 0;
}

.play_video_message_img {
  width: 25px;
  height: 25px;
  margin: 0 10px;
  cursor: pointer;
}

.play_video_message_svg {
  width: 25px;
  height: 25px;
  margin: 0 10px;
  cursor: pointer;
}

.play_video_message_svg:hover {
  fill: #66b1ff;
}

.bullet_hell_input {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  right: 0;
  background: #f1f2f3;
  border-radius: 5px;
  height: 40px;
  width: 500px;
  padding-left: 5px;
}

.bullet_hell_input img {
  width: 10px;
  height: 10px;
}

.bullet_hell_input input {
  margin: 0 10px;
  height: 70%;
  width: 100%;
  border-radius: 5px;
  border-width: 0;
  outline: none;
}

.bullet_hell_input button {
  width: 25%;
  height: 100%;
  border-radius: 0 5px 5px 0;
  border: none;
  background: #66b1ff;
  cursor: pointer;
}

.title_message_end div path {
  fill: #525252;
}

.title_message_end div:hover path {
  fill: #00aeec;
}

.title_message_end div:hover {
  color: #00aeec;
}

.title_message_end div svg + span {
  vertical-align: middle;
  margin-right: 10px;
}

.video_play_details pre {
  height: 80px;
  overflow: hidden;
}

.user_comment_main_first_comment > span {
  margin: 10px;
}

.user_comment_main_user > span {
  margin: 10px;
}

.user_comment_main_user_comment pre {
  font-weight: bold;
}

.user_comment_time_count > * {
  padding-right: 10px;
}

/*---------------------------------------*/

.play_menu_end {
  width: 100%;
  height: 12%;
  transition: .2s .1s;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: -o-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: -moz-linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3));
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
}

.menu_bar {
  height: 20%;
  /*background-color: rgba(0, 0, 0, 0.1);*/
  position: relative;
}

.bar {
  position: absolute;
  bottom: 30%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
}

.bar .barInside {
  height: 3px;
  background-color: aqua;
  transition: .1s .1s;
}


.bar img {
  opacity: 0;
  width: 10px;
  height: 10px;
  transition: .2s .1s;
}

.menu_bar:hover img {
  opacity: 1;
  transform: scale(1.5, 1.5);
}

.bar a {
  width: 0px;
  height: 4px;
  border: 6px solid rgb(0, 204, 255);
  border-top-color: rgb(0, 119, 255);
  border-bottom-color: rgb(0, 119, 255);
  border-left-color: transparent;
  border-right-color: transparent;
  opacity: 0;
  position: absolute;
}

.menu_bar:hover a {
  opacity: 1;
}

.menu_bottom {
  background: transparent;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

div > button {
  border: none;
  color: white;
  font-size: 15px;
  background-color: transparent;
}

.menu_play {
  /* background-color: aqua; */
}

.menu_play img {
  width: 25px;
  height: 25px;
  transition: .5s .1s;
}

.menu_time {
  margin-right: 45%;
  color: rgb(255, 255, 255);
}

.menu_srt {
  /* height: 20px;
      background-color: black; */
  position: relative;
}

.barrage {
  position: absolute;
  top: 50%;
  border-radius: 2px;
  height: 3px;
  width: 30px;
  background-color: rgb(255, 255, 255);
  transform: rotate(45deg);
  box-shadow: 1.5px -1.5px 0px black;
}

.menu_srt b {
  font-size: 10px;
  padding: 2px;
  border-radius: 2px;
  color: white;
  background-color: black;
}

.menu_voice {
  /* background-color: aqua; */
}

.menu_voice img {
  /* vertical-align: middle;
      width: 17px;
      margin: 0 auto;
      height: 17px;
      transition: .5s .1s; */
  /* background-color: black; */
}

#videoSvg {
  width: 20px;
  height: 20px;
  fill: white;
}


#videoSvg:hover {
  animation-name: buttonScale;
  animation-duration: .5s;
  transform-origin: center;
}

#videoSvg:hover > #svg_1 {
  animation-iteration-count: 2;
  animation-name: videoOpacity;
  animation-delay: .4;
  animation-duration: .6s;
}

#videoSvg:hover > #svg_3 {
  animation-iteration-count: 2;
  animation-duration: .4s;
  animation-name: videoOpacity;
}

@keyframes videoOpacity {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#setting {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  fill: white;
}

#setting:hover {
  animation: buttonScale .5s linear;
}

#setting:hover > #settingSvg_1 {
  transform-origin: center;
  animation: settingRotate .5s linear;
}

@keyframes settingRotate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

#inPicture {
  vertical-align: middle;
  width: 15px;
  height: 15px;
  fill: white;
}

#inPictureSvg_2 {
  opacity: 0;
}

#inPicture:hover {
  transform-origin: 110% 110%;
  animation: buttonScale .3s linear;
}

#inPicture:hover > #inPictureSvg_2 {
  animation: inPictureXY .3s linear;
}

@keyframes inPictureXY {
  0% {
    opacity: 0;
  }

  25% {
    opacity: .5;

  }

  50% {
    opacity: 1;

  }

  75% {
    opacity: .5;

  }

  100% {
    opacity: 0;
  }
}


@keyframes buttonScale {
  0% {
    transform: scale(1, 1);
    /* opacity: 1; */
  }

  50% {
    transform: scale(.8, .8);
    /* opacity: 0; */
  }

  100% {
    transform: scale(1, 1);
    /* opacity: 1; */
  }
}


#widescreen {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  fill: white;
}

#widescreen:hover {
  transform-origin: center;
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreenScaleX;
}

#widescreen:hover > #widescreenSvg_2 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreeMobileX;
}

#widescreen:hover > #widescreenSvg_1 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: widescreeMobile-X;
}

@keyframes widescreenScaleX {
  0% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(.8);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes widescreeMobileX {
  0% {
    transform: translateX(0px)
  }

  50% {
    transform: translateX(50px)
  }

  100% {
    transform: translateX(0px)
  }
}

@keyframes widescreeMobile-X {
  0% {
    transform: translateX(0px)
  }

  50% {
    transform: translateX(-50px)
  }

  100% {
    transform: translateX(0px)
  }
}

#fullScreen {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  fill: rgb(255, 255, 255);
}

#fullScreen:hover {
  animation-delay: .2;
  transform-origin: center;
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenScaleX;
}

#fullScreen:hover > #fullScreenSvg_1 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobileX-Y;
}

#fullScreen:hover > #fullScreenSvg_2 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobileXY;
}

#fullScreen:hover > #fullScreenSvg_3 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobile-X-Y;
}

#fullScreen:hover > #fullScreenSvg_4 {
  animation-duration: .3s;
  animation-iteration-count: 2;
  animation-name: fullScreenMobile-XY;
}

@keyframes fullScreenScaleX {
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(.8, .8);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes fullScreenMobileXY {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(50px, 20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobileX-Y {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(50px, -20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobile-XY {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(-50px, 20px)
  }

  100% {
    transform: translate(0px)
  }
}

@keyframes fullScreenMobile-X-Y {
  0% {
    transform: translate(0px)
  }

  50% {
    transform: translate(-50px, -20px)
  }

  100% {
    transform: translate(0px)
  }
}

.menu_full {
  cursor: pointer
}

#bar1 {
  position: absolute;
  bottom: 0px;
  width: 100%;
  outline: none;
  height: 2px;
  transition: .5s .1s;
  background-color: rgb(255, 255, 255);
  /* opacity:0; */
}

#bar1 .bar1Inside {
  height: 100%;
  background-color: aqua;
  transition: .1s .1s;
}

</style>
