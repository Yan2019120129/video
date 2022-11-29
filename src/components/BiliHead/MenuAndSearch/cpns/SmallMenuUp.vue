<template>
  <div class="bt">
    <div class="BMOutSide">
      <div class="buttonMenu">
        <slot name="menuButton"></slot>
      </div>
    </div>
    <slot name="button"></slot>
  </div>
</template>
<style scoped>
.bt {
  /*z-index: 99;*/
  width: 100%;
  height: 100%;
  position: relative;
}

.bt:hover > .BMOutSide {
  display: block;
  animation: menuShow .5s;
}

.bt button {
  height: 100%;
  width: 100%;
  white-space: nowrap;
  align-content: center;
  border: transparent;
  border-radius: 5px;
}

.buttonMenu > * {
  white-space: nowrap;
}

.BMOutSide {
  padding: 5px;
  bottom: 100%;
  left: -80%;
  display: none;
  position: absolute;
}

.buttonMenu {
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px #4a4a4a;
  background-color: white;
}


.bt:hover button {
  background-color: #dedede;
}

@keyframes menuShow {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.buttonMenu > button {
  white-space: nowrap;
}
</style>