<template>
    <div class="news-content">
        <Carousel :msg='carouselData'></Carousel>
        <div class="news-consult">
            <div class="news-consult-title">热门资讯</div>
            <Consult :msg='hotNewsData'></Consult>
            <Schedule :msg='gameData' class="xz"></Schedule>
            <hero-exhibit class="news-hero-exhibit" :msg='exhibitData'></hero-exhibit>
            <video-jump :msg='liveSteanData'></video-jump>
            <video-jump :msg='viedoData'></video-jump>
        </div>
    </div>
</template>

<script>
import Carousel from '@/views/lol/news/components/Carousel'
import Consult from '@/views/lol/news/components/Consult'
import HeroExhibit from '@/views/lol/news/components/HeroExhibit'
import VideoJump from '@/views/lol/news/components/VideoJump'
import Schedule from '@/views/lol/news/components/Schedule'
import { getNews } from '@/api/news'
import { changeVideoData , changeGameData , changeHotNews} from '@/utils/changeImgUrl'
export default {
    name: 'newsIndex',
    data() {
        return {
            liveSteanData: {},
            viedoData: {},
            gameData: {},
            hotNewsData: {},
            carouselData: {},
            exhibitData: {},
        }
    },
    components: {
        Carousel,
        Consult,
        HeroExhibit,
        VideoJump,
        Schedule
    },
    methods: {
        getNewData() {
            getNews().then(res => {
                if(res.data.state === '200') {
                    let data = res.data.newsData
                    this.liveSteanData = changeVideoData(data.liveSteanData)
                    this.viedoData = changeVideoData(data.viedoData)
                    this.gameData = changeGameData(data.gameData)
                    this.hotNewsData = changeHotNews(data.hotNewsData)
                    this.carouselData = changeHotNews(data.carouselData)
                    this.exhibitData = changeHotNews(data.exhibitData)
                }
            })
        }
    },
    created() {
        this.getNewData()
    }
}
</script>

<style scoped>
    .news-consult {
        margin-top: 20px;
    }

    .news-consult-title {
        color: rgb(62,62,62);
    }

    .news-hero-exhibit {
        margin-top: 20px;
    }
</style>
