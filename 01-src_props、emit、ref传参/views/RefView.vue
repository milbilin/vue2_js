<template>
    <div class="ref">
        ref
        <hr>
        <ref-item-vue ref="refItem"></ref-item-vue>
    </div>
</template>

<script>
import RefItemVue from '@/components/RefItem.vue'

export default {
    components: { RefItemVue },
    data() {
        return {
            index: Number
        }
    },
    mounted() {
        console.log('ref操作dom获取，接收到子组件参数：num = ', this.$refs.refItem.num);
        this.index = this.$refs.refItem.num
        console.log('data,', this.index);

        //方式二：
        this.$refs.refItem.$on('receive', this.receive)
    },
    methods: {
        receive(data) {
            console.log('ref自定义事件，接收到子组件参数：num = ', data.num);
        }
    }
}
</script>

<style>
</style>