<template>
    <div class="videoItem">
        <div class="videoItem__img">
            <img :src="require('@/assets/VideoImg/' + videoItem_data.img)" alt="">
        </div>
        <div class="videoItem__text">
            <div class="videoItem__title">
                <span>{{ videoItem_data.title }}</span>
            </div>
            <div class="videoItem__subtitle">
                <span>{{ videoItem_data.subtitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-video-item',
        
        props: {
            videoItem_data: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>
.videoItem {
    margin-bottom: 60px;
}
.videoItem__text {
    padding: 24px 30px;
}
.videoItem__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 16px;
}
.videoItem__subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #878B90;
}
@media(max-width: 1360px) {
    .videoItem {
        margin-bottom: 50px;
    }
    .videoItem__img img {
        width: 580px;
    }
    .videoItem__subtitle {
        font-size: 15px;
    }
} 
@media(max-width: 1240px) {
    .videoItem {
        margin-bottom: 40px;
    }
    .videoItem__img img {
        width: 500px;
    }
    .videoItem__subtitle {
        font-size: 14px;
    }
} 
@media(max-width: 1024px) {
    .videoItem {
        margin-bottom: 30px;
    }
    .videoItem__img img {
        width: 360px;
    }
    .videoItem__subtitle {
        font-size: 13px;
    }
} 
@media(max-width: 792px) {
    .videoItem__img img {
        width: 360px;
    }
    .videoItem__subtitle {
        font-size: 13px;
    }
    .videoItem__text {
        padding: 12px 12px;
    }
} 
</style>