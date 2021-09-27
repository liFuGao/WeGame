<template>
    <el-row>
        <el-col :span='5'>
            <List :msg='ListData' @func = 'getMsgFormSon'></List>
        </el-col>
        <el-col :span='18' :offset='1'>
            <Details :msg='histData'></Details>
        </el-col>
    </el-row>
</template>

<script>
import List from '@/views/lol/record/historical/components/List'
import Details from '@/views/lol/record/historical/components/Details'
import { getHistoricalData , getDetails} from '@/api/record'
import { changeGameList ,changeDetailsUrl } from '@/utils/changeImgUrl'
export default {
    name: 'historical',
    data() {
        return {
            ListData: [],
            histData: {},
            listId: 1
        }
    },
    components: {
        List,
        Details
    },
    methods: {
        getMsgFormSon(data){
            this.listId = data
            this.getDetailsData()
        },
        getListData() {
            getHistoricalData().then(res => {
                let data = res.data.newsData
                this.ListData = changeGameList(data.ListData)
            })
        },
        getDetailsData() {
            getDetails(this.listId).then(res => {
                let data = res.data
                this.histData = changeDetailsUrl(data)
            })
        }
    },
    created() {
        this.getListData()
        this.getDetailsData()
    }
}
</script>

<style scoped>
    .el-row {
        height: 550px;
        background-color: white;
    }
</style>
