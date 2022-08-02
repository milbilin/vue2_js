<template>
  <div class="about">
    about
    <hr>
    <button @click="handleSendGet">发送get请求</button>
    <button @click="handleSendPost">发送post请求</button>
  </div>
</template>

<script>
import { getUserInfo, login } from '../http/api'

export default {
  mounted() {

  },
  methods: {
    async handleSendGet() {
      const getUser = await getUserInfo({ menuId: 11 })
      console.log(getUser);

      // getUserInfo({ menuId: 11 }).then(getUser => {
      //   console.log(getUser);
      // })
    },
    async handleSendPost() {
      const data = await login({
        email: '123',
        password: '12321'
      })
      console.log(data);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>