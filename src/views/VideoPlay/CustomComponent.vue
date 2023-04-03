<template>
  <div class="selector">
    <svg class="show-selector" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         width="15" height="15">
      <path
          d="M183.215629 864.706177l657.565673 0 0-93.912809-657.565673 0L183.215629 864.706177zM394.589546 573.46636l234.88947 0 42.252271 103.341543 98.662992 0-220.792418-516.65962-70.457631 0-225.465853 516.65962 98.5975 0L394.589546 573.46636zM512.039397 254.071326l89.233235 234.834212-173.800198 0L512.039397 254.071326z"
      ></path>
    </svg>
    <div class="custom-component">
      <div class="titleTypeface">字号</div>
      <div class="typeface-size">
        <div class="typeface-style" :class="{'active-typeface-style':activeTypefaceNumber===true}"
             @click="changeTypeface(true)">小
        </div>
        <div class="typeface-style" :class="{'active-typeface-style':activeTypefaceNumber===false}"
             @click="changeTypeface(false)">标准
        </div>
      </div>
      <div class="titleTypeface">颜色</div>
      <div class="color-selector-main">
        <input class="custom-component-input" :value="color"/>
        <div class="color-selector—div" :style="{backgroundColor:color}"></div>
      </div>
      <div class="color-selector">
        <div v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color }"
             :class="{'active-style':index===activeColorNumber,'active-style1':index!==activeColorNumber}"
             @click="changeColor(color,index)"></div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "CustomComponent",
  components: {},
  data() {
    return {
      colors: ['#fe0302', '#ff7204', '#ffaa02', '#ffd302', '#ffff00', '#a0ee00', '#019899', '#4266be', '#89d5ff', '#cc0273', '#000080', '#222222', '#9b9b9b', '#ffffff'],
      color: "#000000",
      activeColorNumber: null,
      activeTypefaceNumber: true,
    }
  },
  methods: {
    changeColor(color, index) {
      this.color = color;
      this.activeColorNumber = index;
    },
    changeTypeface(value) {
      this.activeTypefaceNumber = value
    }

  }
}
</script>

<style>
.selector {
  position: relative; /*设置相对定位，使.hover类生效*/
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-component {
  position: absolute; /*设置绝对定位，使其可以超出.img容器*/
  top: -1000%; /*将其位置上移，使其隐藏在.img容器上方*/
  left: 0;
  display: none; /*默认隐藏*/
  padding: 10px 20px 10px 20px;
  height: 180px;
  width: 200px;
  background: rgba(19, 17, 18, 0.8);
  border-radius: 3px;
  /*color: rgba(0, 0, 0, 0.5);*/

}

.titleTypeface {
  /*margin: 20px 0 20px 0;*/
  color: white;
}

.typeface-size {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
}

.custom-component * {
  font-size: 10px;
}

.typeface-style {
  width: 80px;
  text-align: center;
  background: rgba(227, 222, 222, 0.5);
  border-radius: 2px;
  color: white;
  padding: 2px;
  cursor: pointer;
}


.color-selector-main {
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.custom-component-input {
  outline: none;
  height: 20px;
  width: 120px;
  color: white;
  border-radius: 3px;
  background: black;
  border: 1px solid #afafaf;

  /*margin-left: 10px;*/
}

.color-selector {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(7, 1fr);
}

.color-selector—div {
  width: 50px;
  height: 22px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #afafaf;
  border-radius: 3px;
}

.color-selector div {
  width: 15px;
  height: 15px;
  margin: 5px;
  cursor: pointer;
  /*border: 1px solid rgba(0, 0, 0, 0);*/
  border-radius: 2px;
}

.active-style {
  border: 1px solid #afafaf;
}

.active-style1 {
  border: 1px solid rgba(0, 0, 0, 0);
}

.active-typeface-style {
  background: #00aeec;
}

.show-selector {
  height: 20px;
}

.selector:hover .custom-component {
  display: block;
}

.selector:hover .show-selector {
  fill: #00aeec;
}
</style>
