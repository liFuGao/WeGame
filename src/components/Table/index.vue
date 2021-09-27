<template>
    <el-table
        :data="msg.data"
        border
        style="width: 100%"
        :row-style="{height:'38px'}"
        :cell-style="{padding:'0px'}">

        <el-table-column
        v-for="(item ,index) in msg.tableTitle" :key="index"
        :prop="item.prop"
        :label="item.label"
        >
        </el-table-column>

    </el-table>
</template>

<script>
export default {
    props: ['msg']
}
</script>

<style scoped>
    .el-table {
        font-size: 13px;
    }

    .typeWidth {
        color: violet;
    }
</style>
