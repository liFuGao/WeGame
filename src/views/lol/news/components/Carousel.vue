<template>
    <div>
        <el-carousel trigger="click" arrow='always' height='220px'>
            <el-carousel-item v-for="(item , index) in msg.imgData" :key="index">
                <a :href= item.href target="_blank">
                    <img :src= item.url  alt="">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: ['msg']
}
</script>

<style scoped>

</style>
