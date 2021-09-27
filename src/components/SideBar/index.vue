<template>
    <div class="sideBar-content">
        <div class="sideBar-header">
            <el-input v-model="searchValue" clearable placeholder='搜索引用'></el-input>
            <el-button circle @click='open' icon='el-icon-plus' size='small'></el-button>
        </div>
        <div class="sideBar-main">
            <el-menu router :style="{'background-color': msg}" @select="changBgColor">
                <el-menu-item :key="1" index='#'>
                    <img src="../../images/lol/related-to-me.png" alt="">
                    <span> 与我相关 </span>
                </el-menu-item>
                <el-menu-item index='/lol' :key="2">
                    <img src="../../images/lol/lol.png" alt="">
                    <span> 英雄联盟 </span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    data() {
        return {
            searchValue: '',
            bgcolor: {
                side: '#d7e6e6',
                main:'#b4d5d5'
            }
        }
    },
    props: ['msg'],
    methods: {
        open() {
            this.$prompt('请输入邮箱', '提示', {
                title: '选择添加方式',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: '你的邮箱是: ' + value
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        changBgColor(key) {
            if(key === '#') {
                this.bgcolor.side = '#f3f3f5'
                this.bgcolor.main = '#e6e4e7'
                this.$emit('func',this.bgcolor)
            }
            if(key === '/lol') {
                this.bgcolor.side = '#d7e6e6'
                this.bgcolor.main = '#b4d5d5'
                this.$emit('func',this.bgcolor)
            }
        }
    }
}
</script>

<style>
    .sideBar-content .el-input__inner {
        border-radius: 25px;
        height: 35px;
    }
</style>

<style scoped>
    .sideBar-content {
        padding: 20px 10px;
    }

    .sideBar-header {
        display: flex;
        justify-content: space-around;
    }

    .el-input {
        width: 70%;
        border: none;
    }

    .el-menu {
        border: none;
        margin-top: 25px;
    }

    .el-menu-item {
        height: 40px;
        line-height: 40px;
        margin: 5px 0px;
        border-radius: 8px;
    }

    .el-menu :hover {
        background-color: rgb(209, 204, 204);
    }

    .el-menu :focus {
        background-color: rgb(209, 204, 204);
    }
</style>
