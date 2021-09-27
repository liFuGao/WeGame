<template>
    <div class="footer-content">
        <div class="footer-main">
            <el-button type=text>
                <i class="el-icon-setting"></i>
                <span>辅助设置</span>
            </el-button>
            <div class="footer-region">
                <div>
                    <span> {{region.name}} </span>
                    <el-tag type='success' size='mini'> {{region.delay}} </el-tag>
                </div>
                <div>
                    <el-dropdown trigger='click' @command='changeZone'>
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item , index) in regionData" :key="index" :command = item>
                                <span>{{item.name}}</span>
                                <span style='color: green'>{{item.delay}}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <div class="loading">启动</div>
    </div>

</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            region: {'name': '均衡教派' , 'delay' : '23ms'},
            regionData: [
                {'name': '均衡教派' , 'delay' : '23ms'},
                {'name': '比尔吉沃特' , 'delay' : '20ms'},
                {'name': '艾欧尼亚' , 'delay' : '31ms'}
            ]
        }
    },
    methods: {
        changeZone(item) {
           this.region = item
        }
    }
}
</script>

<style scoped>
    .footer-content {
        height: 55px;
        line-height: 55px;
        width: 1050px;
        background-color: rgb(241,246,246);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
    }

    .footer-region {
        width: 200px;
        display: flex;
        justify-content: space-between;
    }

    .el-dropdown-menu {
        width: 200px;
    }

    .el-dropdown-menu span{
        margin: 0px 8px;
    }

    .footer-main {
        width: 800px;
        padding: 2.5px 8px;
        display: flex;
        justify-content: space-between;
    }

    .el-button {
        color: black;
        font-size: 15px;
        height: 50px;
        width: 145px;
    }

    .el-button:hover {
        background-color: rgb(222,226,226);
        border-radius: 10px;
    }

    .loading {
        width: 250px;
        background-color: rgb(255,224,110);
        text-align: center;
        font-weight: bolder;
        border-radius: 10px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 25% 70px;
        cursor: pointer;
        user-select: none;
    }

    .loading:hover {
        background-color: rgb(255,237,151);
    }
</style>
