import {getBanners, getHotRecommend, getNewDiscShelf, getList, getResidentSinger, getPopularAnchor, getDailySongs} from '@/services/recommend';
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
  return async dispatch => {
    let res = await getHotRecommend(limit)
    if (res.data.code === 200) dispatch(actionObj('saveHotRecommend',res.data.result))
  }
}

//请求新碟上架的函数action
function saveNewDiscShelfAction (limit) {
  return async dispatch => {
    let res = await getNewDiscShelf(limit)
    if (res.data.code === 200) dispatch(actionObj('saveNewDiscShelf',res.data.products))
  }
}

//请求榜单歌单的函数action
function saveListAction () {
  return async dispatch => {
    let res = await getList()
    let dailySongs = await getDailySongs()
    if (res.data.code === 200) {
      dispatch(actionObj('saveSoaringList', res.data.list[0]))
      dispatch(actionObj('saveNewSongList', res.data.list[1]))
      dispatch(actionObj('saveOriginalList', res.data.list[2]))
    }
    if (res.data.code === 200) {
      let songList = dailySongs.data.result
      songList.unshift({
        id: 521416693,
        song: {duration:183000,artists:[{name:'Martin Garrix / David Guetta / Jamie Scott / Romy Dya'}]},
        picUrl:'http://p2.music.126.net/bDdwz0zd-BGYpel1QEU2RA==/109951165983886039.jpg?param=130y130',
        name:'So Far Away',
      })
      dispatch(actionObj('saveDailySongs',dailySongs.data.result))
    }
  }
}

//请求入驻歌手的函数action
function saveResidentSingerAction (offset,limit) {
  return async dispatch => {
    let res = await getResidentSinger(offset,limit)
    if (res.data.code === 200) {
      dispatch(actionObj('saveResidentSinger', res.data.artists))
    }
  }
}

//请求热门主播的函数action
function savePopularAnchorAction (limit) {
  return async dispatch => {
    let res = await getPopularAnchor(limit)
    if (res.data.code === 200) {
      dispatch(actionObj('savePopularAnchor', res.data.data.list))
    }
  }
}

export {
  actionObj,
  saveBannersAction,
  saveHotRecommendAction,
  saveNewDiscShelfAction,
  saveListAction,
  saveResidentSingerAction,
  savePopularAnchorAction
}