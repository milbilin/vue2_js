<template>
  <div class="vuex_item">
    vuex_item
    <br>

    在vuex_item组件中读取VueX的数据：{{ $store.state.data.num }}
    <div>index = {{ index }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState({ index: 'index' })
  }
}
</script>

<style>
</style>