<template>
    <div>
        <div class="Head">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="20">
                    <div class="tag-group">
                        <el-button size="small" type="primary" @click="toggleTag(null,null)">综合排序</el-button>
                        <el-tag
                                size="medium"
                                v-for="(item,i) in items"
                                @click="toggleTag(i,item.name)"
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

import {getLikeVideo} from "@/api/common";

export default {
    components: {
        FilterGrid
    },
    data() {
        return {
            ifShowClassify: true,
            ifGetData: true,
            videoData: {},
            getdata: {
                "limit": 1,
                "dataCount": 20,
                "value": null,
                "otherSort": "",
            },
            items: [{name: '最新发布', active: false},
                {name: '最多弹幕', active: false},
                {name: '最多收藏', active: false},
                {name: '分享最多', active: false},],
            pageData: {}
        }
    },
    mounted() {
        let data = this.$route.query
        this.getdata.value=data.value
        this.getLikeVideo(this.getdata)
    }
    ,
    methods: {
        getLikeVideo(data) {
            getLikeVideo(data).then(
                req => {
                    let data = req.data['data']
                    this.pageData = data
                    this.videoData = data['records']
                    console.log("return", data)
                    this.ifGetData = false
                },
                err => {
                    console.log("err", err.message)
                }
            )
        },
        handleSizeChange(value) {
            console.log("value", value)
            this.getdata.limit = value
            this.getLikeVideo(this.getdata)
        },
        toggleTag(value, value1) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].active = false
                if (i === value) {
                    this.items[i].active = true
                }
            }
            console.log("value", value1)
            this.getdata.videoSubareaType = value1
            this.getLikeVideo(this.getdata)
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
