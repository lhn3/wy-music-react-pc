import request from './request'

//获取轮播图请求
export function getBanners(){
  return request.get('/banner')
}

//获取热门推荐
export function getHotRecommend(limit=null){
  return request({
    url:'/personalized',
    params:{limit}
  })
}

//获取新碟上架
export function getNewDiscShelf(){
  // return request.get()
}

//获取榜单
export function getList(){
  // return request.get()
}