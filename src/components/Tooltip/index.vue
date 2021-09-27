<template>
    <el-tooltip :content = 'illustrate' placement="bottom" effect="light">
        <i class="el-icon-question"></i>
    </el-tooltip>
</template>

<script>
export default {
    name: 'Tooltip',
    props: ['illustrate']
}
</script>

<style scoped>
    .el-tooltip {
        border-color: rgb(238,238,238);
    }
</style>
