<template>
    <el-row :gutter='20'>
        <el-col :span='18'>
            <header-logo style="height: 150px ; width: 695px" :msg='playerData'></header-logo>
            <div class="overview-honor">
                <Honor :msg='item' v-for="(item , index) in honorData" :key="index"></Honor>
            </div>
            <battle-report style="width: 695px; height: 295px" :msg='tableData'></battle-report>
        </el-col>
        <el-col :span='6'>
            <List :msg='ListData'></List>
        </el-col>
    </el-row>
</template>

<script>
import HeaderLogo from '@/views/lol/record/overview/components/HeaderLogo'
import Honor from '@/views/lol/record/overview/components/Honor'
import BattleReport from '@/views/lol/record/overview/components/BattleReport'
import List from '@/views/lol/record/overview/components/List'
import { getOverData } from '@/api/record'
import { changePlayerData , changeGameList , changeHonorData} from '@/utils/changeImgUrl'
export default {
    name: 'overview',
    data() {
        return {
            honorData: {
                recentRecord: {},
                honor: {}
            },
            tableData: {},
            playerData: {},
            ListData: {},
        }
    },
    methods: {
        getOverViewData() {
            getOverData().then(res => {
                let data = res.data.newsData
                this.honorData.honor =  changeHonorData(data.honorData.honorData)
                this.honorData.recentRecord = data.honorData.recentRecord
                this.tableData = data.tableData
                this.playerData = changePlayerData(data.playerData)
                this.ListData = changeGameList(data.ListData)
            })
        }
    },
    created() {
        this.getOverViewData()
    },
    components: {
        HeaderLogo,
        Honor,
        BattleReport,
        List
    }
}
</script>

<style scoped>
    .overview-honor {
        margin: 10px 0px;
        width: 695px;
        height: 150px;
        background-color: white;
        display: flex;
    }


</style>
