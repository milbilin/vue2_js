<template>
  <div class="home">
    home
    <hr>
    <button @click="handleSendGetClick">get请求</button>

  </div>
</template>

<script>
import axios from 'axios'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const getCity = axios.create({
  baseURL: 'http://121.37.198.213:7000',
  timeout: 2000
})
export default {
  methods: {
    async handleSendGetClick() {
      /**
       * axios取消请求无效，待解决！！！
       */
      // try {
      //     const _getCity = await getCity({ url: '/city', CancelToken: source.token })
      //     console.log(_getCity);
      //     source.cancel()

      // } catch (error) {
      //     console.log(axios.isCancel(error));
      //     console.log(error);
      // }


      /**
       * axios取消请求成功
       */
      getCity('/city', { cancelToken: source.token })
        .then(response => {
          console.log(response);

        })
        //捕捉取消请求信息
        .catch(error => {
          console.log(axios.isCancel(error));
          console.log(error);
        })
      source.cancel('取消请求')
    }
  }
}
</script>

<style>
</style>