/**
 * Immutable使用
 * let obj = Immutable.Map()        //浅层拷贝，返回一个新的对象
 * let deepObj = Immutable.fromJS() //深层拷贝
 * let ls = Immutable.list()        //浅层拷贝，返回一个新数组
 *
 * obj.set('key','value')           //设置新的对象的值
 * obj.get('key')                   //获取新的对象的值
 * ls.set(0,'value')                //设置新的数组的值
 * obj.get(0)                       //获取新的数组的值
 */

import { Map } from 'immutable'

//recommend
const recommendState = Map({
  banners:[],
  hotRecommends:[],
  newDiscShelfs:[],
  //榜单
  soaringList:{},
  newSongList:{},
  originalList:{},
  //歌单
  dailySongs:[],
  //入驻歌手
  residentSinger:[],
  //热门主播
  popularAnchor:[]
})

export function recommendReducer(state=recommendState, action){
  switch (action.type){
    case 'saveBanners':
      return state.set('banners',action.payload)
    case 'saveHotRecommend':
      return state.set('hotRecommends',action.payload)
    case 'saveNewDiscShelf':
      return state.set('newDiscShelfs',action.payload)
    case 'saveSoaringList':
      return state.set('soaringList',action.payload)
    case 'saveNewSongList':
      return state.set('newSongList',action.payload)
    case 'saveOriginalList':
      return state.set('originalList',action.payload)
    case 'saveResidentSinger':
      return state.set('residentSinger',action.payload)
    case 'savePopularAnchor':
      return state.set('popularAnchor',action.payload)
    case 'saveDailySongs':
      return state.set('dailySongs',action.payload)
    default:
      return state
  }
}