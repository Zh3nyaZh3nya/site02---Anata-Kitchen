<template>
    <div class="page__wrapper">
        <div 
            v-for="pageNumber in totalPages" 
            class="page__wrapper-link" 
            :key="pageNumber" 
            :class="{'current-page__wrapper-link': page === pageNumber}"
            @click="changePage(pageNumber)"
            > 
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
    export default {
        name:'v-pagination',
        props: ['total', 'item'],
        data() {
            return {
                page: 1,
                limit: 12,
                countCardKitchen: 48,
            }
        },
        methods: {
            changePage(pageNumber) {
                this.page = pageNumber;
                this.$emit('page-change', pageNumber)
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.countCardKitchen / this.limit)
            }
        }, 
    }
</script>

<style lang="scss" scoped>
.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page__wrapper-link {
    border: 1px solid black;
    padding: 10px;
}
.current-page__wrapper-link {
    border: 2px solid green;
}
</style>