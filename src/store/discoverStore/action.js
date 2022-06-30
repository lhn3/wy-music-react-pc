import {getBanners, getHotRecommend, getNewDiscShelf} from '@/services/recommend';
//返回对象的action
let actionObj = (type, payload = null) => ({type,payload})

// 返回函数的action,被传入后会接收dispatch作为参数
function saveBannersAction () {
  return async (dispatch, getState) => {
    /**
     * 网络请求内容
     * ...
     * 请求到数据后在通过dispatch发送action保存数据到redux中
     */
    let res = await getBanners()
    if (res.data.code === 200) dispatch(actionObj('saveBanners',res.data.banners))
  }
}

//请求热门推荐的函数action
function saveHotRecommendAction (limit) {
  return async (dispatch, getState) => {
    let res = await getHotRecommend(limit)
    if (res.status === 200) dispatch(actionObj('saveHotRecommend',res.data.result))
  }
}

//请求新碟上架的函数action
function saveNewDiscShelfAction (limit) {
  return async (dispatch, getState) => {
    let res = await getNewDiscShelf(limit)
    console.log(res)
    if (res.status === 200) dispatch(actionObj('saveNewDiscShelf',res.data.albums))
  }
}

export {
  actionObj,
  saveBannersAction,
  saveHotRecommendAction,
  saveNewDiscShelfAction
}