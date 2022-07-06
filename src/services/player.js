import request from './request'

//获取轮播图请求
export function getSongUrl(id){
  return request({
    url:'/song/url',
    params:{id}
  })
}
//获取歌词请求
export function getSongLyric(id){
  return request({
    url:'/lyric',
    params:{id}
  })
}
