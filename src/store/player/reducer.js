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
  songUrl:"",
  dt:"180000",
  imgUrl:'https://p2.music.126.net/me6QV0CallEOlOP6Zb0b3w==/109951165770805050.jpg?param=34y34',
  songName:'再见莫妮卡',
  artName: '彭席彦/Franky弗兰奇'
})

export function playerReducer(state=playerState, action){
  switch (action.type){
    case 'saveSongUrl':
      return state.set('songUrl',action.payload)
    default:
      return state
  }
}