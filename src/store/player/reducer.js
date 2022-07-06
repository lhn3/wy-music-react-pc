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

//player
const playerState = Map({
  songInfo: {
    id:null,
    songUrl:"",
    dt:"",
    imgUrl:'',
    songName:'',
    artName: '',
  },
  songLyric:[],
  currentIndex: null,
  playlist: []
})

export function playerReducer(state=playerState, action){
  switch (action.type){
    case 'saveSongInfo':
      return state.set('songInfo',action.payload)
    case 'saveSongLyric':
      return state.set('songLyric',action.payload)
    case 'savePlaylist':
      return state.set('playlist',[...state.get('playlist'),action.payload])
    case 'changePlaylist':
      return state.set('playlist',action.payload)
    case 'saveCurrentIndex':
      return state.set('currentIndex',action.payload)
    default:
      return state
  }
}