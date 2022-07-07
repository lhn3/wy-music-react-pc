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

//获取每日推荐
export function getDailySongs(){
  return request({
    url:'/personalized/newsong?limit=29',
  })
}

//获取入驻歌手
export function getResidentSinger(offset,limit){
  return request({
    url:'/top/artists',
    params:{offset,limit}
  })
}

//获取热门主播
export function getPopularAnchor(limit){
  return request({
    url:'/dj/toplist/hours',
    params:{limit}
  })
}