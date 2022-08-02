<template>
    <div class="emit_item">
        emit_item
        <hr>
        <button @click="handleReleaseClick">btn</button>
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