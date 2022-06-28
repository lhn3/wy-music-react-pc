import request from '@/services';
//返回对象的action
let actionObj = (type, payload = null) => ({type,payload})

// 返回函数的action,被传入后会接收dispatch作为参数
async function saveBannersAction (dispatch, getState) {
  /**
   * 网络请求内容
   * ...
   * 请求到数据后在通过dispatch发送action保存数据到redux中
   */
  let res = await request.get('/banner')
  if (res.status === 200) dispatch(actionObj('saveBanners',res.data.banners))
}

export {
  actionObj,
  saveBannersAction
}