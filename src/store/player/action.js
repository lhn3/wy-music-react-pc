import {getSongUrl, getSongLyric} from '@/services/player';
//返回对象的action
let actionObj = (type, payload = null) => ({type,payload})

// 返回函数的action,被传入后会接收dispatch作为参数
function saveSongUrlAction (songInfo) {
  return async (dispatch, getState) => {
    //先判断是否已经存在此歌曲，存在则无需添加并移动到放在第一位,不存在则在末尾加入
    let isSame = getState().player.get('playlist').findIndex(item => item.id === songInfo.id)
    if (isSame !== -1) {
      let newPlaylist = [...getState().player.get('playlist')]
      newPlaylist.splice(isSame,1)
      dispatch(actionObj('changePlaylist',[getState().player.get('playlist')[isSame], ...newPlaylist]))
    } else {
      //没找到再发送请求
      let res = await getSongUrl(songInfo.id)
      if (res.data.code === 200) {
        console.log(songInfo)
        const info = {
          id: songInfo.id,
          songUrl: res.data.data[0].url,
          dt:songInfo.song.sqMusic.playTime,
          imgUrl:songInfo.picUrl,
          songName:songInfo.name,
          artName: songInfo.song.artists[0].name,
        }
        //如果第一次加入则修改songInfo
        if (getState().player.get('playlist').length === 0){
          dispatch(actionObj('saveSongInfo',info))
          dispatch(actionObj('saveCurrentIndex',0))
          dispatch(actionObj('savePlaylist',info))
        } else {
          dispatch(actionObj('savePlaylist',info))
        }
      }
    }
  }
}

//获取歌词
function saveSongLyric (id) {
  return async (dispatch, getState) => {
    let res = await getSongLyric(id)
    console.log(res)
    // if (res.data.code === 200) {
    //   let lyric = {}
    //   res.data.lrc.lyric
    //   dispatch(actionObj('saveSongUrl',lyric))
    // }
  }
}
export {
  saveSongUrlAction,
  saveSongLyric
}