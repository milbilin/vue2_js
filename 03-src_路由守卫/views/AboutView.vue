<template>
  <div class="about">
    about
    <hr>
    <router-link class="a" :to="{name:'news'}">News</router-link>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>