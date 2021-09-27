<template>
    <div class="BattleReport-content">
        <el-row>
            <el-col :span='22' :offset='1' class="BattleReport-title">
                <div>
                    <span> 个人战报 </span>
                </div>
                <div>
                    <el-button size='mini' round @click="dialogTableVisible = true"> 更多 </el-button>
                    <el-dialog :visible.sync="dialogTableVisible">
                        <Table :msg='msg'></Table>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='22' :offset='1'>
                <Table :msg='tableData'></Table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Table from '@/components/Table/index'
export default {
    name: 'BattleReport',
    data() {
        return {
            tableData: {
                'tableTitle': this.msg.tableTitle,
                'data': []
            },
            dialogTableVisible: false,
        }
    },
    props:['msg'],
    components: {
        Table
    },
    watch: {
        msg: function(newVal , oldVal) {
            this.tableData.tableTitle = newVal.tableTitle
            for(let i = 0 ; i < 4 ; i++) {
                this.tableData.data.push(newVal.data[i])
            }
        }
    }
}
</script>

<style scoped>
    .BattleReport-content {
        background-color: white;
    }

    .BattleReport-title {
        display: flex;
        justify-content: space-between;
    }

    .el-col {
        margin-top: 20px;
    }
</style>
