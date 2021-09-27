<template>
    <el-row :gutter='20'>
        <el-col :span='11' v-for="(item , index) in msg.data" :key="index">
            <div v-if="item.type === 'img'">
                <img :src="item.url" alt="">
            </div>
            <div v-else>
                <span> {{ item.name }} </span>
            </div>
            <div class="Honer-num"> {{item.num}} </div>
        </el-col>
        <Tooltip :illustrate='msg.illustrate'></Tooltip>
    </el-row>
</template>

<script>
import Tooltip from '@/components/Tooltip/index'
export default {
    name: 'honor',
    props: ['msg'],
    components: {
        Tooltip
    },
}
</script>

<style scoped>
    .el-row {
        width: 100%;
        user-select: none;
    }

    .el-col {
        margin-bottom: 20px;
        text-align: center;
        height: 40%;
        display: flex;
        justify-content: space-around;
    }

    div {
        align-items: center;
    }

    img {
        height: 60px;
        width: 60px;
    }

    .Honer-num {
        font-size: 22px;
        color: rgb(116,116,116);
        font-weight: bolder;
    }

    span {
        font-size: 14px;
        color: rgb(196,197,214);
    }
</style>
