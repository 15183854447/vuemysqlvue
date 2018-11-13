import axios from 'axios';
// axios.defaults.withCredentials=true;
// 创建实例时设置配置的默认值
var service = axios.create({
  baseURL: 'http://127.0.0.1:9528',
  timeout: 5000 //请求超时的时间
  // withCredentials: true, //表示跨域请求时是否需要使用凭证
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default service;
