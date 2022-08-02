<template>
    <div class="props">
        props
        <hr>
        <props-item-vue :num="num"></props-item-vue>
    </div>
</template>

<script>
import PropsItemVue from '@/components/PropsItem.vue'

export default {
    components: { PropsItemVue },
    data() {
        return {
            num: 1
        }
    },
}
</script>

<style>
</style>