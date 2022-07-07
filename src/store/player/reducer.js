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
  isPlay: false,
  audioRef: null,
  songInfo: {
    id:0,
    songUrl:'',
    dt:0,
    imgUrl:'',
    songName:'',
    artName: '',
  },
  songLyric:[],
  currentIndex: 0,
  playlist: [],
  sequence:3 //播放模式：1随机，2单曲，3顺序
})

export function playerReducer(state=playerState, action){
  switch (action.type){
    case 'saveIsPlay':
      return state.set('isPlay',action.payload)
    case 'saveAudioRef':
      return state.set('audioRef',action.payload)
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
    case 'saveSequence':
      return state.set('sequence',action.payload)
    default:
      return state
  }
}