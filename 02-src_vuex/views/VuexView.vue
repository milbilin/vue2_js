<template>
  <div class="vuex">
    vuex
    <br>
    在vuex组件中示范操作数据
    <button @click="handleChangeStateData(传参)">操作state中数据</button>
    <hr>

    <vuex-item-vue></vuex-item-vue>
  </div>
</template>

<script>
import vuexItemVue from '@/components/vuexItem.vue'
import { mapActions } from 'vuex'

export default {
  components: { vuexItemVue },
  methods: {
    // handleChangeStateData() {
    //   //btn通过VueX中的dispatch进行事件派发
    //   this.$store.dispatch('handleActionData', 1)
    // },
    ...mapActions({ handleChangeStateData: 'handleActionData' })
  }
}
</script>

<style>
</style>