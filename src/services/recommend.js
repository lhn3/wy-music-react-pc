import request from './request'

//获取轮播图请求
export function getBanners(){
  return request.get('/banner')
}