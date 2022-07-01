import axios from "axios";

//全局默认配置
// axios.defaults.baseURL='http://localhost:8080'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//创建实例配置
const instance = axios.create({
  // baseURL:'http://123.207.32.32:9001',
  baseURL:'http://127.0.0.1:3007',
  timeout:5000,
  headers:{}
})

//请求拦截器
instance.interceptors.request.use(config=>{
  console.log('请求拦截')
  return config
})

//响应拦截器
instance.interceptors.response.use(res=>{
  console.log('响应拦截')
  return res
})

export default instance