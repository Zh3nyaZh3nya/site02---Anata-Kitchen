<template>
    <button class="v-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'v-button'
    }
</script>

<style>
.v-button {
    background: #B17955;
    border-radius: 8px;
    width: 300px;
    padding: 12px 40px;
    margin: 0 auto;
}

.v-button:hover {
    background: rgba(177, 121, 85, 0.9);
    transition: all ease .3s;
}

.v-button span {
    color: #fff;
}
</style>