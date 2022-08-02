<template>
    <div class="ref_item">
        ref_item
        <hr>
        <button class="btn" @click="handleReleaseClick">btn</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                num: 1
            }
        }
    },
    methods: {
        handleReleaseClick() {
            this.$emit('receive', this.data)
        }
    }
}
</script>

<style>
</style>