<template>
    <div class="emit">
        emit
        <hr>
        <emit-item-vue @receive="receive"></emit-item-vue>
    </div>
</template>

<script>
import EmitItemVue from '@/components/EmitItem.vue'

export default {
    components: { EmitItemVue },
    methods: {
        receive(data) {
            console.log('接收到子组件参数：num = ', data.num);
        }
    }
}
</script>

<style>
</style>