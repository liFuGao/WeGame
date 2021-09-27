<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="战绩总览" name="allRecord">
            <over-view v-if="tabsName.allRecord"></over-view>
        </el-tab-pane>
        <el-tab-pane label="历史战绩" name="historyRecord">
            <Historical v-if="tabsName.historyRecord"></Historical>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import OverView from '@/views/lol/record/overview/index'
import Historical from '@/views/lol/record/historical/index'
export default {
    name: 'record',
    data() {
        return {
            activeName: 'allRecord',
            tabsName: {
                allRecord: true,
                historyRecord: false,
            }
        }
    },
    components: {
        OverView,
        Historical
    },
    methods: {
        handleClick(tab) {
            for (let i in this.tabsName) {
                if (tab.name != i) {
                    this.tabsName[i] = false;
                } else {
                    this.tabsName[i] = true;
                }
            }
        }
    }
}
</script>

<style scoped>
</style>
