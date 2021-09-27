<template>
    <div>
        <div class="navBar">
        <el-row :gutter='20'>
            <el-col :span='2'>
                <img src="../../images/lol/lol.png" alt="">
            </el-col >
            <el-col :span='3' v-for="item in navBarData" :key='item.id'>
                <div v-if="item.path">
                    <router-link :to="item.path">{{ item.name }}</router-link>
                </div>
                <div v-else>{{ item.name }}</div>
            </el-col>
        </el-row>
        </div>
        <div  class="navBar-hide">
            <el-row :gutter='20'>
                <el-col :span='3' :offset='2'><div> 精选 </div></el-col>
                <el-col :span='3'><div> 战绩总览 </div></el-col>
                <el-col :span='3'><div> 直播 </div></el-col>
                <el-col :span='3'><div> 英雄列表 </div></el-col>
                <el-col :span='3'><div> 大神观战 </div></el-col>
                <el-col :span='3'><div> 召唤师搜索 </div></el-col>
            </el-row>
            <el-row :gutter='20'>
                <el-col :span='3' :offset='2'><div> 撸圈社区 </div></el-col>
                <el-col :span='3'><div> 历史战绩 </div></el-col>
                <el-col :span='3'><div> 视频 </div></el-col>
                <el-col :span='3'><div> 英雄排行 </div></el-col>
                <el-col :span='3'><div> 国服排行 </div></el-col>
            </el-row>
            <el-row :gutter='20'>
                <el-col :span='3' :offset='5'><div> 我的英雄 </div></el-col>
                <el-col :span='3'><div> 赛事 </div></el-col>
                <el-col :span='3'><div> 峡谷排行 </div></el-col>
                <el-col :span='3'><div> 等级排行 </div></el-col>
            </el-row>
            <el-row :gutter='20'>
                <el-col :span='3' :offset='5'><div> 我的皮肤 </div></el-col>
                <el-col :span='3' :offset='6'><div> 召唤师搜索 </div></el-col>
            </el-row>
            <el-row :gutter='20'>
                <el-col :span='3' :offset='5'><div> 个人荣誉 </div></el-col>
            </el-row>
            <el-row :gutter='20'>
                <el-col :span='3' :offset='5'><div> 荣誉截图 </div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navBarData: [
                { 'id': 1, 'name' : '资讯' , 'path': '/lol/news'},
                { 'id': 2, 'name' : '我的战绩' , 'path': '/lol/record' },
                { 'id': 3, 'name' : '直播' },
                { 'id': 4, 'name' : '英雄大全' },
                { 'id': 5, 'name' : '发现' },
                { 'id': 6, 'name' : '查找' }
            ]
        }
    }
}
</script>

<style scoped>
    img {
        height: 40px;
        width: 40px;
    }

    .navBar-hide {
        display: none;
        position: absolute;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 9999;
        width: 1000px;
        font-size: 15px;
        color: rgb(117,117,117);
    }

    .navBar:hover + .navBar-hide {
        display: block;
    }

    .el-col div {
        width: 95px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    .el-col div:hover {
        border-radius: 10px;
        background-color: rgb(164,182,182);
        cursor: pointer;
    }

    .el-row {
        margin-bottom: 5px;
    }
</style>
