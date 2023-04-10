<template>
    <div class="bili-head_banner_outskirts">
        <div ref="MenuAndSearch" class="bili-head_banner">
            <div class="bili-head_banner_left-ul">
                <div>
                    <Navigation>
                        <!-- 插入slot="button_active"属性为动态效果 -->
                        <!-- 插入slot="button_text" 为静态效果 -->
                        <router-link slot="button_active" to="/main">首页</router-link>
                    </Navigation>
                </div>
            </div>
            <!--                        <form action="" class="head_search">-->
            <!--                            <input type="text"><button>搜素</button>-->
            <!--                        </form>-->
            <!--        搜索框-->
            <el-autocomplete
                    :fetch-suggestions="querySearch"
                    @select="handleSelect"
                    :select-when-unmatched="true"
                    class="input_border-radius"
                    style="width: 60%;margin:0 10% 0 10%;border-radius: 30px;" v-model="input.value"
                    placeholder="请输入内容">
                <i
                        class="el-icon-search el-input__icon cursor"
                        slot="suffix"
                        @click="handleIconClick(input)">
                </i>
            </el-autocomplete>
            <!--    右边的导航栏-->
            <div class="bili-head_banner_right-ul">
                <!-- 头像-->
                <div>
                    <LoginNavigation>
                        <el-avatar
                                slot="button_active"
                                :src="headImg">
                        </el-avatar>
                        <!--            <el-avatar v-if="!ifLogin"-->
                        <!--                       slot="button_active"-->
                        <!--                       icon="el-icon-user-solid">-->
                        <!--            </el-avatar>-->
                        <NoLoginMenu v-if="!ifLogin" slot="menu"/>
                        <LoginMenu v-if="ifLogin" slot="menu"/>
                    </LoginNavigation>
                </div>
                <div @click="$router.push('/UserCentre')">
                    <Navigation>
                        <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
                        <a slot="button_text">收藏</a>
                    </Navigation>
                </div>
                <div>
                    <Navigation>
                        <img src="@/assets/svg/bigVIPTwo.svg" slot="button_active" alt="">
                        <a slot="button_text">历史</a>
                    </Navigation>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import testData from '@/assets/test.json'
import Navigation from '@/components/BiliHead/MenuAndSearch/cpns/Animation'
import LoginNavigation from '@/components/BiliHead/MenuAndSearch/loging/LoginNavigation'
import GameMenu from '@/components/BiliHead/MenuAndSearch/cpns/GameMenu.vue'
import LiveMenu from '@/components/BiliHead/MenuAndSearch/cpns/LiveMenu.vue'
import NoLoginMenu from '@/components/BiliHead/MenuAndSearch/cpns/NoLoginMenu.vue'
import LoginMenu from '@/components/BiliHead/MenuAndSearch/cpns/LoginMenu.vue'

import {mapState} from "vuex";
import NavigationClassifyTwo from "@/components/BiliHead/MenuAndSearch/NavigationClassifyTwo";
import {getTokenValue} from "@/utility/manageDate";

export default {
    name: "MenuAndSearchTwo",
    components: {
        Navigation,
        GameMenu,
        LiveMenu,
        NoLoginMenu,
        LoginNavigation,
        LoginMenu,
        NavigationClassifyTwo,
    },
    data() {
        return {
            myData: testData.test,
            input: {
                value: "",
            },
            ifShowMenu: false,
            headImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            restaurants: [],
            state: ''
        }
    },
    computed: {
        ...mapState("loginAbout", ['ifLogin'])
    },
    mounted() {
        this.restaurants = this.loadAll();
        let userUrl = getTokenValue("userUrl")
        if (userUrl) {
            this.headImg = '/pav' + userUrl
        }
    },
    methods: {
        openMenu() {
            this.ifShowMenu = !this.ifShowMenu
        },
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(value) {
            console.log("handleSelect", value)
            this.goSearchContent(value)
        },
        handleIconClick(value) {
            console.log("handleIconClick", value)
            this.goSearchContent(value)
        },
        goSearchContent(data) {
            this.$router.push({
                name: "searchContent",
                query: data
            }).then(() => {
                // 路由跳转完成后执行的代码
                this.$router.go(0)
            })
        },
        loadAll() {
            return [
                {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
                {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
                {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
                {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
                {"value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
                {"value": "贡茶", "address": "上海市长宁区金钟路633号"},
                {"value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号"},
                {"value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号"},
                {"value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107"},
                {"value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号"},
                {"value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号"},
                {"value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号"},
                {"value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"},
                {"value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层"},
                {"value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号"},
                {"value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路"},
                {"value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺"},
                {"value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819"},
                {"value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"},
                {"value": "枪会山", "address": "上海市普陀区棕榈路"},
                {"value": "纵食", "address": "元丰天山花园(东门) 双流路267号"},
                {"value": "钱记", "address": "上海市长宁区天山西路"},
                {"value": "壹杯加", "address": "上海市长宁区通协路"},
                {"value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"},
                {"value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室"},
                {
                    "value": "爱茜茜里(近铁广场)",
                    "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
                },
                {"value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6"},
                {"value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号"},
                {"value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号"},
                {"value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号"},
                {"value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号"},
                {"value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号"},
                {"value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室"},
                {"value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1"},
                {"value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号"},
                {"value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室"},
                {"value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部"},
                {"value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B"},
                {"value": "浏阳蒸菜", "address": "天山西路430号"},
                {"value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路"},
                {"value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室"},
                {"value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号"},
                {"value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号"},
                {"value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位"},
                {"value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号"},
                {"value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼"},
                {"value": "阳阳麻辣烫", "address": "天山西路389号"},
                {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
            ];
        },
    }
}
</script>
<style scoped>
.bili-head_banner_outskirts {
    position: sticky;
    z-index: 15;
    height: 4rem;
    top: 0;
    width: 100%;
    background: white;
    color: #000000;
    box-shadow: 3px 3px 3px #f5f5f5;
}

.bili-head_banner {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    /*background: #e4fffb;*/
}


.bili-head_banner_left-ul {
    height: 100%;
    list-style-type: none;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.bili-head_banner_left-ul div {
    height: 100%;
    align-content: center;
}

.head_search > input {
    border: transparent;
    outline: none;
}

.bili-head_banner_right-ul {
    height: 100%;
    list-style-type: none;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 20px; /* 设置间隔 */
}

.bili-head_banner_right-ul div {
    color: #000000;
}

.bili-head_banner_right-ul div a {
    font-size: 10px;
}

.bili-head_banner form {
    color: #000000;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.bili-head_banner form input {
    width: 70%;
}

.navigation_left > div {
    margin-right: 1rem;
}

.navigation_left img {
    border-radius: 20px;
    width: 40px;
    height: 40px;
}

.navigation_right > div {
    margin: auto;
    white-space: nowrap;
    /* 内容不换行 */
}

.navigation_right svg {
    vertical-align: middle;
    width: 20px;
    height: 20px;
}

.navigation_right a {
    margin: auto 0;
}

.unfold_menu {
    margin: auto;
    position: relative;
}

.menu_button {
    position: absolute;
    padding: 10px;
    cursor: pointer;
}

.navigation_menu {
    height: 800px;
    overflow-y: scroll;
    overflow-x: clip;
    width: 150px;
    /*background: red;*/
    /*border-radius: 10px;*/
    border-bottom-right-radius: 3px;
    box-shadow: 1px 1px 1px #f5f5f5;
}

.navigation_menu::-webkit-scrollbar {
    width: 5px;
}

.navigation_menu::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.input_border-radius > .el-input__inner {
    border-radius: 10px;
}

.cursor {
    cursor: pointer;
}
</style>