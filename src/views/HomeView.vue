<template>
  <div class="home">
    home
    <input type="text" @keyup.enter="handleEnter">
    <hr>

  </div>
</template>

<script>


export default {
  data() {
    return {
      timer: null,
    };
  },
  mounted() {

  },
  methods: {
    handleEnter() {

    }
  }
}
</script>

<style>
</style>