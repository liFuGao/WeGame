<template>
    <div class="schedule-content">
        <div class="schedule-header">
            <span> {{msg.title}} </span>
            <el-button round>更多</el-button>
            <!-- 240 * 220 -->
        </div >
        <div style="width: 960px ; overflow-x: hidden">
        <ul :style="{
            width: itemlist.length * 240 + 'px',
            'margin-left': xxx * 240 + 'px',
            transition: 0.5 + 's'
        }">
            <li v-for="(item , index) in msg.data" :key="index" class="textst">
                <div class="schedule-body">
                    <el-divider> {{item.LeagueYear}} </el-divider>
                    <div class="schedule-body-title"> {{item.LeagueTime}} </div>
                    <div class="schedule-main">
                        <div class="main-main">
                            <div class="main-info">
                                <a href="">
                                    <img :src="item.leftTeam.icon" alt="">
                                </a>
                                <div> {{item.leftTeam.name}} </div>
                            </div>
                            <div class="main-info">
                                <div class="schedule-score"> {{item.score}} </div>
                                <div> {{item.scheduleStatus}} </div>
                            </div>
                            <div class="main-info">
                                <a href="">
                                    <img :src="item.rightTeam.icon" alt="">
                                </a>
                                <div>{{item.rightTeam.name}}</div>
                            </div>
                        </div>
                        <el-divider class="main-hr"></el-divider>
                        <el-button size='mini' round style='width: 80px'><a href="">视频</a></el-button>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        <button @click="prev" class="leftMove moveBtn">  <i class="el-icon-arrow-left"></i> </button>
        <button @click="next" class="rightMove moveBtn"> <i class="el-icon-arrow-right"></i> </button>
    </div>
</template>

<script>
export default {
    name: 'schedule',
    data() {
        return {
            itemlist: this.msg.data,
            xxx: 0,
        }
    },
    props: ['msg'],
    methods: {
        prev() {
            if (this.xxx < 0) {
                this.xxx += 4;
            }
        },
        next() {
            if (this.xxx > -(this.itemlist.length + this.xxx)) {
                this.xxx -= 4;
            }
        }
    },
    watch: {
        'msg': function(newVal , oldVal) {
            this.itemlist = newVal.data
        }
    }
}
</script>

<style>
    .el-divider__text {
        font-size: 12px;
        background-color: rgb(244, 244, 244);
        user-select: none;
    }
</style>

<style scoped>
    .schedule-content {
        position: relative;
    }

    .schedule-body {
        text-align: center;
        width: 240px;
    }

    .schedule-body-title {
        font-size: 12px;
        color: rgb(117, 117, 117);
    }

    .schedule-header {
        display: flex;
        justify-content: space-between;
    }

    .schedule-main {
        width: 225px;
        height: 170px;
        background-color: rgb(244,244,244);
        border: 1px solid rgb(228,228,228);
        border-radius: 3px;
        margin: 0px auto;
        margin-top: 15px;
    }

    .el-button {
        background-color: rgb(238,238,238);
    }

    .main-hr {
        margin: 12px 0px;
    }

    .main-main {
        height: 105px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .main-info {
        width: 55px;
        font-size: 12px;
        color: rgb(133,133,133);
    }

    .main-info img {
        height: 55px;
        width: 55px;
    }

    .schedule-score {
        font-size: 24px;
        font-weight: bolder;
        color: rgb(117, 117, 117);
    }

    ul {
        list-style: none;
        padding: 0px;
    }

    li {
        display: inline-block;
    }

    .leftMove {
        left: 0px;
    }

    .rightMove {
        right: 0px;
    }

    .moveBtn {
        position: absolute;
        top: 170px;
        height: 100px;
        width: 30px;
        border: none;
        background-color: rgba(203,203,203,0.3);
        cursor: pointer;
        color: rgb(249, 249, 249);
        font-size: 30px;
        font-weight: bolder;
    }

    .moveBtn:hover {
        background-color: rgba(119,119,119,0.3);
    }
</style>
