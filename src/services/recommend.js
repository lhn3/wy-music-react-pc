import request from './request'

//获取轮播图请求
export function getBanners(){
  return request.get('/banner?type=0')
}

//获取热门推荐
export function getHotRecommend(limit=null){
  return request({
    url:'/personalized',
    params:{limit}
  })
}

//获取新碟上架
export function getNewDiscShelf(limit=null){
  return request({
    url:'/album/list',
    params:{limit}
  })
}

//获取榜单
export function getList(){
  return request({
    url:'/toplist',
  })
}