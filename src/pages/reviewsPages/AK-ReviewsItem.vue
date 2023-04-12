<template>
    <div class="reviewItem">
        <div class="reviewItem-title">
            <p>{{ reviewItem_data.name }}</p>
            <div class="reviewItem-title-img">
                <img 
                    v-for="reviewStar in reviewItem_data.star" 
                    :src="require('@/assets/UI/' + reviewStar)"
                >
            </div>
        </div>
        <div class="reviewItem-message">
            <p>{{ reviewItem_data.message }}</p>
        </div>
        <div class="reviewItem-img">
            <img 
                v-for="reviewItem in reviewItem_data.reviewsImg" 
                :src="require('@/assets/reviewsImg/' + reviewItem)"
            >
        </div>
        <div class="reviewItem-date">
            <span>{{ reviewItem_data.dateNumber }}</span><span>{{ reviewItem_data.dateMonth }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-review-item',
        props: {
            reviewItem_data: {
                type: Object,
                default: () => {}
            }
        }
    }
    
</script>

<style lang="scss" scoped>
.reviewItem {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 60px;
}
.reviewItem-title {
    font-weight: 600;
    display: flex;
    margin-bottom: 24px;
}
.reviewItem-title-img{
    margin-left: 30px;
    margin-top: 2px;
}
.reviewItem-message {
    max-width: 850px;
    margin-bottom: 25px;
}
.reviewItem-img img{
    margin-right: 15px;
    margin-bottom: 24px;
}
.reviewItem-date {
    color: #878B90;
    font-size: 14px;
}
.reviewItem-date span {
    margin-right: 5px;
}

</style>