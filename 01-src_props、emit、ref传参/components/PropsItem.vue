<template>
    <div class="props_item">
        props_item
        <hr>
        <div class="head">接收到父组件参数: num = {{ num }}</div>
    </div>
</template>

<script>
export default {
    props: ['num']
}
</script>

<style>
</style>