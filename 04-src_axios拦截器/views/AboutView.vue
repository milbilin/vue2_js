<template>
  <div class="about">
    about
    <hr>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    // 添加请求拦截器
    // axios.interceptors.request.use(function (config) {
    //   // 在发送请求之前做些什么
    //   return config;
    // }, function (error) {
    //   // 对请求错误做些什么
    //   return Promise.reject(error);
    // });

    // // 添加响应拦截器
    // axios.interceptors.response.use(function (response) {
    //   // 2xx 范围内的状态码都会触发该函数。
    //   // 对响应数据做点什么
    //   return response;
    // }, function (error) {
    //   // 超出 2xx 范围的状态码都会触发该函数。
    //   // 对响应错误做点什么
    //   return Promise.reject(error);
    // });

    axios.interceptors.request.use(
      (config) => {
        console.log('config', config);
        return config
      },
      (error) => {
        console.log('error', error);
        return Promise.reject(error)
      }
    )

    axios.interceptors.response.use(
      (response) => {
        console.log('response', response);
        return response
      },
      (error) => {
        console.log('error', error);
        return Promise.reject(error)
      }
    )

    axios({
      method: 'GET',
      url: 'http://121.37.198.213:7000/city'
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style lang="scss" scoped>
</style>