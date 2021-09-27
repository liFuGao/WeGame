<template>
    <div>
        <el-row>
            <el-col :span='9'>
                <div>
                    <el-avatar :size='70'>
                        <img :src="msg.avatar" alt="">
                    </el-avatar>
                </div>
                <div>
                    <div class="lol-playerName">
                        <span> {{ msg.playerName }} </span>
                        <button @click="copyName('.copyBtn')"  class="copyBtn" :data-clipboard-text='msg.playerName'></button>
                    </div>
                    <div class="lol-playerRegion">
                        <span> {{ msg.region }} </span>
                         <el-divider direction="vertical"></el-divider>
                        <span> {{ msg.accountData }} </span>
                    </div>
                </div>
            </el-col>
            <el-col :span='12' :offset='3'>
                <div v-for="(item , index) in msg.rankData" :key="index" class="rank-style">
                    <div>
                        <img :src='item.icon'  alt="">
                    </div>
                    <div>
                        {{ item.rank }}
                    </div>
                    <div>
                        {{ item.model }}
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { copyName } from '@/utils/copy'
export default {
    name: 'HeaderLogo',
    props: ['msg'],
    methods: {
        copyName
    }
}
</script>

<style scoped>
    button {
        height: 20px;
        width: 20px;
        background-image: url('../../../../../images/lol/copy.png');
        border: none;
        cursor: pointer;
        margin-left: 10px;
    }

    .el-row {
        height: 100%;
        background-color: white;
        width: 100%;
    }

    .el-col {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
    }

    .lol-playerName {
        font-size: 18px;
        display: flex;
        align-items: center;
    }

    .lol-playerRegion {
        font-size: 12px;
        color: rgb(116, 116, 116);
        margin-top: 15px;
    }

    .rank-style {
        text-align: center;
    }
</style>
