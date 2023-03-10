<template>
  <div class="App">
    <br>
    <button @click="sendGetMapping">测试get请求,不带参数</button>
    <br>
    <br>
    <button @click="sendGetMappingData">测试get请求，携带参数</button>
    <input type="text" v-model="id" placeholder="输入一个id获取参数">
    <br>
    <br>
    <button @click="sendPostMapping">测试post请求</button>
    <input type="text" v-model="name" placeholder="输入你的名字">
    <input type="text" v-model="age" placeholder="输入你的年龄">
    <br>
    <br>
    <button @click="sendPostMapping">测试post请求</button>
    <input type="text" v-model="name" placeholder="输入你的名字">
    <input type="text" v-model="age" placeholder="输入你的年龄">
    <br>
    <br>
    <button @click="sendPutMapping">测试put请求</button>
    <input type="text" v-model="id" placeholder="输入id">
    <br>
    <br>
    <button @click="sendDeleteMapping">测试delete请求</button>
    <input type="text" v-model="id" placeholder="输入id">

  </div>
</template>
<script>


import axios from "@/api/axios";
import qs from "qs";

export default {
  name: 'SendRequest',
  components: {},
  data() {
    return {
      activeName: 'second',
      id: 45,
      psw: "",
      name: "晏家杰",
      age: 18,
    };
  },
  methods: {
    async sendGetMapping() {
      // 测试get请求不带参数, 精简版
      const result = await axios.get("/nacos-video-admin/testGetMapping")
      console.log("返回的数据", result)

      // 测试get请求不带参数,精简版
      axios.get("/nacos-video-admin/testGetMapping").then(
          response => {
            console.log("返回得数据", response.data)
          },
          error => {
            console.log("错误信息", error)
          }
      )

    },
    sendGetMappingData() {
      let datas = {
        id: this.id
      }
      // 测试get请求带query参数,使用params放置query参数,完整版
      axios({
        url: "/nacos-video-admin/testGetMappingData",
        method: "get",
        params: datas,
      }).then(
          response => {
            console.log("返回得数据", response.data)
          },
          error => {
            console.log("错误信息", error)
          }
      )

      // get 携带query参数使用params 精简版
      axios.get("/nacos-video-admin/testGetMappingData", {params: {id: this.id}}).then(
          response => {
            console.log("返回得数据", response.data)
          },
          error => {
            console.log("错误信息", error)
          }
      )
    },
    sendPostMapping() {
      // 使用params发送query方式的数据可以直接封装,默认发送的是json编码的数据
      const data = {
        "name": this.name,
        "age": this.age,
      }

      // 发送的是urlencoded编码数据
      const data1 = `name=${this.name}&age=${this.age}`

      // 发送请求体数据需要使用表单提交的方式，完整版
      axios({
        url: "/nacos-video-admin/testPostMappingData",
        method: "post",
        data: qs.stringify(data)
      }).then(
          response => {
            console.log("返回得数据1", response.data)
          },
          error => {
            console.log("错误信息1", error)
          }
      )

      // 发送请求体数据需要使用表单提交的方式,精简版
      axios.post("/nacos-video-admin/testPostMappingData", qs.stringify(data)).then(
          response => {
            console.log("返回得数据1", response.data)
          },
          error => {
            console.log("错误信息1", error)
          }
      )

      // 使用请求体发送urlencoded类型数据，完整版
      axios({
        url: "/nacos-video-admin/testPostMappingData",
        method: "post",
        data: data1,
      }).then(
          response => {
            console.log("返回得数据3", response.data)
          },
          error => {
            console.log("错误信息3", error)
          }
      )

      // 使用请求体发送urlencoded类型数据，精简版
      axios.post("/nacos-video-admin/testPostMappingData", data1).then(
          response => {
            console.log("返回得数据3", response.data)
          },
          error => {
            console.log("错误信息3", error)
          }
      )

      // 发送query数据,不建议，不符合规范，完整版
      axios({
        url: "/nacos-video-admin/testPostMappingData",
        method: "post",
        params: data
      }).then(
          response => {
            console.log("返回得数据2", response.data)
          },
          error => {
            console.log("错误信息2", error)
          }
      )

      // 发送query数据,不建议，精简版
      axios.post("/nacos-video-admin/testPostMappingData", data1).then(
          response => {
            console.log("返回得数据2", response.data)
          },
          error => {
            console.log("错误信息2", error)
          }
      )

    },
    sendPutMapping() {
      // 发送query方式的数据可以直接封装,发送的是json数据
      const datas = {
        "id": this.id,
      }

      // 发送的是urlencoded数据
      const data1 = `id=${this.id}`

      // 发送query数据
      axios({
        url: "/nacos-video-admin/testPutMappingData",
        method: "put",
        params: datas,
      }).then(
          response => {
            console.log("返回得数据1", response["data"])
          },
          error => {
            console.log("错误信息1", error)
          }
      )

      // 发送urlencoded编码格式代码，精简版
      axios.put("/nacos-video-admin/testPutMappingData", data1).then(
          response => {
            console.log("返回得数据21", response["data"])
          },
          error => {
            console.log("错误信息21", error)
          },
      )
      // 发送body数据,urlencoded编码数据，完整版
      axios({
        url: "/nacos-video-admin/testPutMappingData",
        method: "put",
        data: data1,
      }).then(
          response => {
            console.log("返回得数据22", response["data"])
          },
          error => {
            console.log("错误信息22", error)
          }
      )
      //  发送body数据,json编码数据，完整版
      axios({
        url: "/nacos-video-admin/testPutMappingData",
        method: "put",
        data: qs.stringify(datas),
      }).then(
          response => {
            console.log("返回得数据3", response["data"])
          },
          error => {
            console.log("错误信息3", error)
          }
      )
    },
    sendDeleteMapping() {
      // 发送query方式的数据可以直接封装,发送的是json数据
      const datas = {
        "id": this.id,
      }

      // 发送的是urlencoded数据
      const data1 = `id=${this.id}`

      //  发送delete请求，query数据类型，完整版
      axios({
        url: "/nacos-video-admin/testDeleteMappingData",
        method: "delete",
        params: datas,
      }).then(
          response => {
            console.log("返回得数据1", response["data"])
          },
          error => {
            console.log("错误信息1", error)
          }
      )

      //  发送delete请求，query数据类型, 精简版
      axios.delete("/nacos-video-admin/testDeleteMappingData", {params: datas}).then(
          response => {
            console.log("返回得数据3", response["data"])
          },
          error => {
            console.log("错误信息3", error)
          }
      )

    },
  },
}
</script>
<style scoped>
</style>