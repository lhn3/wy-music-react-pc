import {getSongUrl} from '@/services/player';
//返回对象的action
let actionObj = (type, payload = null) => ({type,payload})

// 返回函数的action,被传入后会接收dispatch作为参数
function saveSongUrlAction (id) {
  return async (dispatch, getState) => {
    let res = await getSongUrl(id)
    if (res.data.code === 200) dispatch(actionObj('saveSongUrl',res.data.data[0].url))
  }
}
export {
  saveSongUrlAction
}