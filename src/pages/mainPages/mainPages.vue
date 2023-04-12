<template>
    <main class="main__pages">

        <vHeader />

        <div class="main__pages__content">

            <vMainSlider></vMainSlider>

            <vVideoSlider></vVideoSlider>

            <vCatalogJob></vCatalogJob>

        </div>

        <vFooter></vFooter>

    </main>
    
</template>

<script>
    import vHeader from '@/components/AK-Header'
    import vMainSlider from '@/components/AK-MainSlider'
    import vVideoSlider from '@/components/AK-VideoSlider'
    import vCatalogJob from '@/components/AK-CatalogJob.vue'
    import vFooter from '@/components/AK-Footer.vue'

    export default {
        components: {
            vHeader, vMainSlider,  vVideoSlider, vCatalogJob, vFooter
        }
    }
</script>

<style>
.main__pages__content {
    margin: 32px 0 100px 0;
}
</style>