<template>
    <div class="videoJump-content">
        <div class="videoJump-title">
            <div> {{ msg.title }} </div>
            <el-tabs>
                <el-tab-pane :label='msg.data.label'>
                    <el-row :gutter='20'>
                        <el-col :span='6' v-for="(items , indexs) in msg.data.data" :key="indexs">
                            <a :href="items.href" >
                                <div class="video-href">
                                    <img :src="items.img" alt="" class="video-img">
                                    <div class="video-depict">
                                        <el-avatar><img :src="items.avatar" alt=""></el-avatar>
                                        <div>
                                            <div style="font-size: 13px"> {{ items.name }} </div>
                                            <div> {{ items.author }} </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoJump',
    props: ['msg']
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    .el-col {
        margin-bottom: 20px;
    }

    .el-avatar {
        background: white;
    }

    .video-href {
        font-size: 0px;
    }

    .video-img {
        height: 125px;
        width: 225px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .video-depict {
        height: 60px;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .video-depict div {
        margin: 5px 0px;
        width: 150px;
        font-size: 12px;
        color: rgb(60, 60, 60);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
