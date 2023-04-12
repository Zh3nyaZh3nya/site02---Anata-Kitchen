<template>
    <VHeader />

    <div class="videoPage">
        <h2>Видео</h2>
        <div class="videoPage-item">
            <VideoItem
                v-for="videoItem in videoItems"
                :key="videoItem.id"
                :videoItem_data="videoItem"
            />
        </div>

    </div>

    <VFooter />

</template>

<script>
    import VHeader from '@/components/AK-Header.vue';
    import VFooter from '@/components/AK-Footer.vue';
    import VideoItem from '@/pages/videoPages/AK-VideoItem.vue';

    export default {
        components: {
            VHeader, VFooter, VideoItem
        },
        data() {
            return {
                videoItems: [
                    {
                        id: 1,
                        img: 'image 3.png', title: 'Кухня Teramo', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                    {
                        id: 2,
                        img: 'image 4.png', title: 'Кухня Integrato', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                    {
                        id: 3,
                        img: 'image 5.png', title: 'Кухня Teramo', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                    {
                        id: 4,
                        img: 'image 6.png', title: 'Кухня Integrato', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                    {
                        id: 5,
                        img: 'image 3.png', title: 'Кухня Integrato', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                    {
                        id: 6,
                        img: 'image 5.png', title: 'Кухня Teramo', 
                        subtitle: 'Кухонный гарнитур с фасадами в белых и розовых тонах. Помимо верхних шкафов с матовыми розовыми фасадами, у модели в качестве открывания используется ручка-профиль в розовом цвете'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.videoPage {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
}
.videoPage h2 {
    margin-bottom: 50px;
}
.videoPage-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
@media(max-width: 1360px) {
    .videoPage {
        max-width: 1240px;
    }
}
@media(max-width: 1240px) {
    .videoPage {
        max-width: 1024px;
    }
}
@media(max-width: 1024px) {
    .videoPage {
        max-width: 768px;
    }
}
@media(max-width: 792px) {
    .videoPage {
        max-width: 540px;
    }
    .videoPage-item {
        display: grid;
        grid-template-columns: 1fr;
    }
}
@media(max-width: 540px) {
    .videoPage {
        max-width: 360px;
    }

}
</style>