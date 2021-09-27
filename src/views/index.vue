<template>
    <div class="index-content"  :style="{'background-color': bgcolor.main}">
        <div class="sideBar" :style="{'background-color': bgcolor.side}">
            <side-bar :msg='bgcolor.side' @func='changeBgColor'></side-bar>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar/index'
export default {
    name: 'index',
    data() {
        return {
            bgcolor: {
                side: '#d7e6e6',
                main: '#b4d5d5'
            }
        }
    },
    components: {
        SideBar
    },
    methods: {
        changeBgColor(color) {
            this.bgcolor = color
        }
    }
}
</script>

<style scoped>
    .index-content {
        height: calc(100% - 36px);
        width: calc(100% - 36px);
        padding: 18px;
    }

    .sideBar {
        width: 200px;
        height: 100%;
        float: left;
    }

    .main {
        height: 100%;
        width: calc(100% - 220px);
        float: right;
    }
</style>
