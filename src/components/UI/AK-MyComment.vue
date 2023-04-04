<template>
    <div class="myComment">

        <VReviewPopup v-if="visiblePopup" @closePopup="closePopup" @closePopupBtn="closePopup"></VReviewPopup>

        <div class="myComment-title">
            <div class="myComment-star">
                <img src="@/assets/UI/YellowStar.svg">
                <img src="@/assets/UI/YellowStar.svg">
                <img src="@/assets/UI/YellowStar.svg">
                <img src="@/assets/UI/YellowStar.svg">
                <img src="@/assets/UI/YellowStar.svg">
            </div>
            <p>4.9 / 5</p>
        </div>
        <div class="myComment-btn">
            <VButton :style="{width: '360px', color: '#fff'}" @click="showPopup">Написать свой отзыв</VButton>
        </div>
    </div>
</template>

<script>
    import VButton from '@/components/UI/AK-Button.vue'
    import VReviewPopup from './AK-ReviewPopup.vue';
    export default {
        name: 'v-my-comment',
        components: {
            VButton, VReviewPopup
        },
        data() {    
            return {
                visiblePopup: false
            }
        },
        methods: {
            showPopup() {
                this.visiblePopup = true
            },
            closePopup() {
                this.visiblePopup = false
            }
        }
    }
</script>

<style lang="scss" scoped>
.myComment {
    max-width: 360px;
    margin-bottom: 100px;
}
.myComment-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
}
.myComment-star img{
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
</style>