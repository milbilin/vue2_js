<template>
  <div class="about_news">
    about_new
    <hr>

  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // ...
    /*
    beforeRouteEnter前不能拿到当前组件的this，因为组件还有被创建，
    可以通过next(vm => {console.log(vm)}) 回传当前组件的this进行一些逻辑操作
    */
    console.log(to, from);
    next()
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log(to, from);
    next()
  }
}
</script>

<style>
</style>