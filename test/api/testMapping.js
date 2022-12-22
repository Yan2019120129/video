// 测试发送数据接口
import Axios from "@/api/axios";
import qs from "qs";

// 测试get不传参
export function testGetMapping() {
    return Axios({
        url: "/nacos-video-admin/testGetMapping",
        method: "get",
    })
}

// 测试get带参数
export function testGetMappingData(data) {
    return Axios({
        url: "/nacos-video-admin/testGetMappingData",
        method: "get",
        params: data,
    })
}

// 测试post带参数
export function testPostMappingData(datas) {
    console.log("发送的数据", datas)
    return Axios({
        url: "/nacos-video-admin/testPostMappingData",
        method: "post",
        // data: qs.stringify(datas), // 发送请求体的数据需要使用qs.stringify()对数据进行封装
        data: datas, // 发送请求体的数据需要使用qs.stringify()对数据进行封装
    })
}