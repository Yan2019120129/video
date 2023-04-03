<template>
  <div class="vertical_centerOut">
    <div class="vertical_center">
      <div class="preview-container">
        <img :src="'pav'+selectedImage" v-if="selectedImage"/>
        <p v-else>请选择一张图片作为封面</p>
        <div>视频封面</div>
      </div>
      <div class="image-container ">
        <div class="imageWidth" v-for="(image,index) in imageData" :key="index" @click="selectImage(image['imgPath'])">
          <img :src="'pav'+image['imgPath']"/>
          <div>封面{{ index + 1 }}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgPreview",
  props: [
    "imageData"
  ],
  data() {
    return {
      images: ['/assets/img/001.jpg', '/assets/img/002.jpg', '/assets/img/003.jpg', '/assets/img/004.jpg'],
      selectedImage: "",
    };
  },
  mounted() {
    this.selectedImage = this.imageData[0]['imgPath']
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
  },
};
</script>

<style>
.vertical_centerOut {
  height: 100%;
  width: 100%;
}

.vertical_center {
  width: 100%;
  display: flex;
  align-items: end;
}

.preview-container {
  width: 30%;
  /*height: 300px;*/
  display: flex;
  flex-direction: column;
}

.preview-container img {
  max-width: 100%;
  max-height: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
}

.imageWidth {
  margin-left: 10px;
  width: 25%;

}

.image-container {
  width: 100%;
  display: flex;
  /*width: 300px;*/
  /*height: 250px;*/

}

.image-container img {
  /*width: 400px;*/
  /*height: 400px;*/
  border: 1px solid #ccc;
  border-radius: 10px;
  /*overflow: hidden;*/
  max-width: 100%;
  max-height: 100%;
  /*margin: auto;*/
  margin-left: 10px;
  cursor: pointer;
  border-radius: 10px;
}
</style>
