import request from './request'

//获取轮播图请求
export function getSongUrl(id){
  return request({
    url:'/song/url',
    params:{id}
  })
}
