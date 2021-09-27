<template>
    <el-row :gutter='20'>
        <el-col>
            <div style="padding-left: 10px; font-size: 15px"> 全部比赛 </div>
            <el-divider></el-divider>
            <el-menu >
                <el-menu-item v-for="item in msg" :key="item.id" @click="getID(item.id)" :class="{victoryBgColor: item.result === '胜利' , failBgColor: item.result === '失败'}">
                    <div class="list-row" style="height: 100%">
                        <img :src="item.url" alt="">
                        <div>
                            <div class="list-row" style="width: 130px">
                                <div class="list-row">
                                    <div :class="{victoryColor: item.result === '胜利' , failColor: item.result === '失败'}"> {{ item.result }} </div>
                                    <div style="color: black"> {{ item.model }} </div>
                                </div>
                                <div style="font-size: 12px ; color: rgb(116,116,116)"> {{ item.date }} </div>
                            </div>
                            <div v-if="item.performance">
                                <el-tag size='mini' v-if="item.performance === '碾压局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini' v-else-if="item.performance === '躺赢局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini' v-else-if="item.performance === 'carry局'"> {{ item.performance }} </el-tag>
                                <el-tag size='mini'  type='danger' v-else> {{ item.performance }} </el-tag>
                            </div>
                            <div v-if="!item.performance"> &nbsp; </div>
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
    data() {
        return {
            id: 1
        }
    },
    props: ['msg'],
    methods: {
        getID(rowID) {
            this.id = rowID
            this.$emit('func',this.id)
        }
    },
}
</script>

<style scoped>
    .el-row {
        padding: 10px 0px;
        height: 100%;
    }

    .el-menu {
        border: none;
    }

    img {
        width: 40px;
        height: 40px;
        float: left;
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
        height: 65px;
        line-height: normal;
        border-bottom: 1px solid rgb(211, 211, 211);
    }

    .victoryColor {
        color: green;
        margin-right: 5px;
    }

    .failColor {
        color: red;
        margin-right: 5px;
    }

    .victoryBgColor:focus {
        border-left: 2px solid green;
        margin-right: 5px;
    }

    .failBgColor:focus {
        border-left: 2px solid red;
        margin-right: 5px;
    }
</style>
