<template>
    <div class="lol-index">
        <nav-bar class="lol-header"></nav-bar>
        <el-scrollbar style="height:90% ; width: 100%" >
            <router-view class="lol-main"></router-view>
        </el-scrollbar>
        <game-login class="lol-login"></game-login>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/index'
import GameLogin from '@/views/lol/game-login/index'
export default {
    name: 'LolHome',
    data() {
        return {

        }
    },
    components: {
        NavBar,
        GameLogin
    }
}
</script>

<style scoped>
    .lol-index {
        width: 100%;
        height: 100%;
        position: relative;
    }


    .lol-header {
        width: 1000px;
        margin: 0px auto;
        margin-bottom: 20px;
    }

    .lol-main {
        width: 960px;
        padding: 20px;
        margin: 0px auto;
        margin-bottom: 30px;
        background-color: rgb(238,238,238);
    }

    .lol-login {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin: 0px auto;
        box-shadow:0px -5px 60px -5px rgb(180,213,213);
    }
</style>

<style>
    .el-scrollbar__thumb {
        display: none;
    }
    .el-scrollbar__wrap {
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
