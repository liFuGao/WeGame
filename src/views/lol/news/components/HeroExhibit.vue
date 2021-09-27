<template>
    <div class="heroExhibit-content">
        <div class="heroExhibit-title">
            <span> {{ msg.title }} </span>
            <el-button round>更多</el-button>
        </div>

        <div class="heroExhibit-body">
            <div class="heroExhibit-main" v-for="(item , index) in msg.imgData" :key="index">
                <div class="heroExhibit-hreo">
                    <img :src="item.url" alt="">
                </div>
                <div class="heroExhibit-num">
                    {{ item.num }}场
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'heroExhibit',
    props: ['msg']
}
</script>

<style scoped>
    .heroExhibit-body {
        display: flex;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .heroExhibit-title {
        display: flex;
        justify-content: space-between;
    }

    .heroExhibit-main {
        width: 100px;
    }

    .heroExhibit-main:hover  .heroExhibit-hreo{
        border: 2px solid rgb(126,181,214);
    }

    .heroExhibit-hreo {
        height: 74px;
        width: 74px;
        padding: 3px;
        border: 1px solid rgb(219,219,219);
    }

    .heroExhibit-hreo img {
        height: 74px;
        width: 74px;
    }

    .heroExhibit-num {
        background-image:url('../../../../images/lol/heroNum.png');
        background-repeat: no-repeat;
        width: 70px;
        margin-left: 6px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: rgb(202,202,202);
    }

    .el-button {
        background-color: rgb(239,239,239);
    }
</style>
