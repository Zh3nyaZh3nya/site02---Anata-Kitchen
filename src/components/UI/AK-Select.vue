<template>
    <select class="select" :v-model="modelValue" @change="changeOptions" style="margin-left: 30px;">
        <option disabled selected>{{ selectItems.nameSelect }}</option>
        <option v-for="option in selectItems.selectOptions" :key="option.article" :value="option.value" class="select-option"> {{ option.name }}</option>
    </select>
</template>

<script>
    export default {
        name: 'v-select',
        props: {
            selectItems: {
                type: Object,
                default: () => {}
            },
            modelValue: {
                type: String,
            }

        },
        data() {
            return {
                
            }
        },
        methods: {
            changeOptions(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }

</script>

<style>
.select {
    display: flex;
}

</style>