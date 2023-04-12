<template>
    <VHeader></VHeader>

    <main class="kitchen__pages">
        <VCatalogKitchen/>
    </main>
    
    <VFooter></VFooter>

</template>

<script>
    import VHeader from '@/components/AK-Header.vue';
    import VFooter from '@/components/AK-Footer.vue';
    import VCatalogKitchen from '../../components/AK-CatalogJobKitchen.vue';

    export default {
        components: {
            VHeader, VFooter, VCatalogKitchen 
        }
    }
</script>

<style>
.kitchen__pages {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 100px;
}
@media(max-width: 1360px) {
    .kitchen__pages {
        max-width: 1240px;
    }
}
@media(max-width: 1240px) {
    .kitchen__pages {
        max-width: 1124px;
    }
}
@media(max-width: 1024px) {
    .kitchen__pages {
        max-width: 768px;
    }
}
@media(max-width: 768px) {
    .kitchen__pages {
        max-width: 540px;
    }
}
@media(max-width: 540px) {
    .kitchen__pages {
        max-width: 360px;
    }
}
</style>