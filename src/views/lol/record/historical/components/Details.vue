<template>
    <div>
        <el-row :gutter='20'>
            <el-col :span='3'>
                <div class="col-div">日期</div>
                <span> {{ msg.date }} </span>
            </el-col>
            <el-col :span='3'>
                <div class="col-div">类型</div>
                <span> {{ msg.model }} </span>
            </el-col>
            <el-col :span='4'>
                <div class="col-div">开始时间</div>
                <span> {{ msg.start }} </span>
            </el-col>
            <el-col :span='3'>
                <div class="col-div">人头</div>
                <span class="victoryColor"> {{ msg.victoryTeamHeadNum }} </span>
                <span>/</span>
                <span class="failColor"> {{ msg.failTeamHeadNum }} </span>
            </el-col>
            <el-col :span='3'>
                <div class="col-div">时长</div>
                <span> {{ msg.time }} </span>
            </el-col>
            <el-col :span='7'>
                <div class="col-div">金钱</div>
                <span class="victoryColor"> {{ msg.victoryTeamMoney }} </span>
                <span>/</span>
                <span class="failColor"> {{ msg.failTeamMoney }} </span>
            </el-col>
        </el-row>
        <el-table
        :row-style="{height:'44px'}"
        :cell-style="{padding:'0px'}"
        :data='msg.player'>
            <el-table-column label='胜方'>
                <template slot-scope="scope">
                    <div  class="msgils-player">
                        <div class="msgils-player" style="width: 130px">
                            <img :src="scope.row.url" width="32" height="32">
                            <div> {{ scope.row.name }} </div>
                        </div>
                        <button @click="copyName('.copyBtn')"  class="copyBtn" :data-clipboard-text='scope.row.name'></button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label='段位' width='60' prop='rank'></el-table-column>
            <el-table-column label='评价' width='60' prop='evaluation'></el-table-column>
            <el-table-column label='金钱' width='60' prop='money'></el-table-column>
            <el-table-column label='杀敌/死亡/助攻' prop='KDA'></el-table-column>
            <el-table-column label='出装'>
        　　<template slot-scope="scope">
        　　　　<img :src="scope.row.equipment" width="165" height="25">
        　　</template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { copyName } from '@/utils/copy'
export default {
    name: 'msgils',
    props: ['msg'],
    methods: {
        copyName
    }
}
</script>

<style scoped>
    .el-row {
        height: 100%;
        background-color: white;
        padding: 10px 0px;
    }

    .el-col {
        text-align: center;
        font-size: 13px;
    }

    .col-div {
        color: rgb(171, 171, 171);
    }

    .el-table {
        font-size: 12px;
    }

    .victoryColor {
        color: green;
    }

    .failColor {
        color: red;
    }

    button {
        height: 20px;
        width: 20px;
        background-image: url('../../../../../images/lol/copy.png');
        border: none;
        cursor: pointer;
        margin-left: 10px;
        display: none;
    }

    .msgils-player {
        display: flex;
        justify-content: space-between;
    }

    /deep/.el-table .cell {
        text-align: center;
    }
</style>

<style>
    .el-table__row:hover .copyBtn {
        display: block;
    }
</style>
