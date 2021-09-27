<template>
    <div class="consult-content">
        <el-row :gutter='20'>
            <el-col :span='15'>
                <div class="consult-img">
                    <img :src="item.url" alt="" v-for="(item , index) in msg.imgData" :key="index">
                </div>
            </el-col>
            <el-col :span='8' :offset='1'>
                <template class="consult-text">
                    <el-tabs>
                        <el-tab-pane :label="item.label" v-for="(item , index) in msg.textData" :key="index">
                            <span v-for="(items , indexs) in item.text" :key="indexs">
                                <a :href="items.href" class="aName"> {{ items.name }}</a>
                                <a :href="items.href" class="aDate"> {{ items.date }}</a>
                            </span>
                        </el-tab-pane>
                    </el-tabs>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'consult',
    props: ['msg'],
}
</script>

<style scoped>
    .consult-img {
        width: 620px;
    }

    .consult-img img {
        margin: 15px 20px 0px 0px ;
    }

    .consult-text {
        width: 360px;
    }

    .el-tabs {
        width: 340px;
    }

    .el-tabs .aName {
        width: 280px;
        color: rgb(112 ,112,112);
        text-decoration: none;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
    }

    .el-tabs span {
        width: 340px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .el-tabs .aDate {
        width: 60px;
        color: rgb(112 ,112,112);
        text-decoration: none;
        font-size: 13px;
    }

    .consult-content {
        margin-bottom: 20px;
    }
</style>
