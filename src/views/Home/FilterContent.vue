<template>
    <div>
        <div class="Head">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <div class="tag-group">
                        <el-button size="small" type="primary" @click="toggleTag(null,null)">分类</el-button>
                        <el-tag
                                size="medium"
                                v-for="(item,i) in items1"
                                @click="toggleTag(i,item['videoSubareaTypeId'])"
                                :class="{ active: item.active }"
                                :key="item['videoSubareaTypeId']"
                                effect="plain">
                            {{ item['videoSubareaType'] }}
                        </el-tag>
                    </div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <div class="tag-group">
                        <el-button size="small" type="primary" @click="toggleTag1(null,null)">综合排序</el-button>
                        <el-tag
                                size="medium"
                                v-for="(item,i) in items"
                                @click="toggleTag1(i,item.name)"
                                :class="{ active: item.active }"
                                :key="i"
                                effect="plain">
                            {{ item.name }}
                        </el-tag>
                    </div>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </div>
        <div class="Main" v-loading="ifGetData">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="22" :offset="2">
                    <el-empty description="没有数据" v-if="videoData.length===0"></el-empty>
                    <FilterGrid :videoData="videoData"/>
                </el-col>
            </el-row>
        </div>
        <div class="Floot">
            <el-row type="flex" class="row-bg" justify="center">
                <el-pagination
                        @current-change="handleSizeChange"
                        :page-size="pageData.size"
                        layout="prev, pager, next"
                        :total="pageData.total"
                >
                </el-pagination>
            </el-row>
        </div>

    </div>
</template>

<script>
import FilterGrid from '@/views/UserCollect/FilterGrid'

import {getVideoPage} from "@/api/common";

export default {
    components: {
        FilterGrid
    },
    data() {
        return {
            ifGetData: true,
            videoData: {},
            getdata: {
                "limit": 1,
                "dataCount": 5,
                "showDataContentId": null,
                "otherSort": "",
                "videoSubareaTypeId": null,
            },
            items: [{name: '最新发布', active: false},
                {name: '最多弹幕', active: false},
                {name: '最多收藏', active: false},
                {name: '分享最多', active: false},],
            items1: [],
            pageData: {}
        }
    },
    mounted() {
        let data = this.$route.query
        this.getdata.showDataContentId = data['videoSubareaId']
        this.items1 = JSON.parse(data["videoSubarea"])
        console.log("this.items1", this.items1)
        // 如果videoSubareaId为空，则不显示分类信息
        // 将element 中的标签类型传入对象中，实现一个动态类型标签样式
        for (let i = 0, j = 0; i < this.items1.length; i++) {
            // this.$set(this.items1[i], "type", this.itemType[j])
            this.$set(this.items1[i], "active", false)
            j++;
            if (j > 4) {
                j = 0;
            }
        }
        this.getVideoPageDate(this.getdata)
    },
    methods: {
        getVideoPageDate(value) {
            this.ifGetData = true
            // 根据分类Id获取对应的分类数据
            getVideoPage(value).then(req => {
                    let data = req.data['data']
                    this.pageData = data
                    this.videoData = data['records']
                    console.log("return", data)
                    this.ifGetData = false
                },
                error => {
                    this.ifGetData = false
                    console.log("错误信息", error.message)
                }
            )

        }
        ,
        handleSizeChange(value) {
            console.log("value", value)
            this.getdata.limit = value
            this.getVideoPageDate(this.getdata)
        },
        toggleTag(value, value1) {
            console.log("value", value)
            console.log("value", this.items1)
            for (let i = 0; i < this.items1.length; i++) {
                this.items1[i].active = false
                if (i === value) {
                    this.items1[i].active = true
                }
            }
            console.log("value", value1)
            this.getdata.videoSubareaTypeId = value1
            this.getVideoPageDate(this.getdata)
        },
        toggleTag1(value, value1) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].active = false
                if (i === value) {
                    this.items[i].active = true
                }
            }
            console.log("value", value1)
            this.getdata.videoSubareaType = value1
            this.getVideoPageDate(this.getdata)
        },
    }
    ,
    computed: {}
}
</script>

<style scoped>
.Head {
    /*height: 50px;*/
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    /*align-content: center;*/
    flex-flow: column;
}

.Main {
    /*height: 500px;*/
    width: 100%;
    min-height: 600px;
}

.Floot {
    /*height: 80px;*/
    /*position: absolute;*/
    width: 100%;
    /*bottom: 0;*/
}

.el-tag {
    cursor: pointer;
    margin: 5px;
}

/*---------------------------------------------------------*/
.el-row {
    /*margin-bottom: 10px;*/

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    /*background: #99a9bf;*/
}

.bg-purple {
    /*background: #d3dce6;*/
}

.bg-purple-light {
    /*background: #e5e9f2;*/
}

.grid-content {
    border-radius: 4px;
    min-height: 20px;
}

.row-bg {
    padding: 5px 0;
}

.active {
    background: #fb7299 !important;
    color: white;
}
</style>
