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

var urlList = []

getCity.interceptors.request.use(
  config => {
    const url = config.baseURL + config.url
    // urlList.forEach(() => {
    if (urlList.includes(url)) {
      throw ('网络加载中')
    } else {
      urlList.push(url)
    }
    // })
    console.log(config);
    return config
  },
  err => {
    return err
  }
)

export default {
  methods: {
    async handleSendGetClick() {
      getCity('/city', { cancelToken: source.token })
        .then(response => {
          console.log(response);

        })
        .catch(error => {
          console.log(axios.isCancel(error));
          console.log(error);
        })
      // source.cancel('取消请求')

      console.log(urlList);
      console.log('*********');
    }
  }
}
</script>

<style>
</style>