<template>
    <el-row :gutter='20'>
        <el-col>
            <div> 近期战绩 </div>
            <el-divider></el-divider>
            <el-menu >
                <el-menu-item v-for="item in msg" :key="item.id" @click="getID(item.id)">
                    <div class="list-row" style="height: 100%">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="list-row" style="width: 150px">
                                <div class="list-row">
                                    <div :class="{victoryColor: item.result === '胜利' , failColor: item.result === '失败'}"> {{ item.result }} </div>
                                    <div style="color: black"> ({{ item.model }}) </div>
                                </div>
                                <div style="font-size: 12px ; color: rgb(116,116,116)"> {{ item.date }} </div>
                            </div>
                            <div v-if="item.performance">
                                <el-tag size='mini' v-if="item.performance === '碾压局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini' v-else-if="item.performance === '躺赢局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini' v-else-if="item.performance === 'carry局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini'  type='danger' v-else> {{ item.performance }} </el-tag>
                            </div>
                            <div v-if="!item.performance" style="height: 37.5px"></div>
                        </div>
                    </div>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'List',
    props: ['msg'],
    methods: {
        getID(key) {
            console.log(key);

        }
    }
}
</script>

<style scoped>
    .el-row {
        background-color: white;
        padding: 10px 0px;
        height: 616px;
    }

    .el-menu {
        border: none;
    }

    img {
        width: 40px;
        height: 40px;
        border: 2px solid blcak;
    }

    .list-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-divider {
        margin: 10px 0px;
    }

    .el-menu-item {
        padding: 0px 10px !important;
        height: 75px;
        line-height: normal;
        border-bottom: 1px solid rgb(228,228,228);
    }

    .victoryColor {
        color: green;
        margin-right: 5px;
    }

    .failColor {
        color: red;
        margin-right: 5px;
    }
</style>
