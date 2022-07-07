import React, {memo, useEffect} from "react";
import {ListTableStyle} from "./style";
import {useDispatch,useSelector} from "react-redux";
import {saveAddSongAction,actionObj} from "@/store/player/action"

export default memo(function ListTable(props){
  const { listInfo, songList } = props
  const dispatch = useDispatch()
  const {audioRef} = useSelector((state)=>({
    audioRef: state.player.get('audioRef'),
  }))

  //播放并添加播放列表
  const addAndPlaySong = (songInfo) => {
    audioRef.current.pause()
    dispatch(saveAddSongAction(songInfo,true))
    setTimeout(()=>{
      audioRef.current.play()
    },100)
  }

  //添加播放列表
  const addSong = (songInfo) => {
    dispatch(saveAddSongAction(songInfo,false))
  }
  return (
    <ListTableStyle>
      <div className="header">
        <div className="image sprite_covor">
          <img src={listInfo.coverImgUrl}/>
          <a className="image_cover"/>
        </div>
        <div className="info">
          <a>{listInfo.name}</a>
          <div>
            <i className="btn play sprite_02" />
            <i className="btn favor sprite_02" />
          </div>
        </div>
      </div>
      <div className="list">
        {
          songList.map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index+1}</div>
                <div className="info">
                  <a className="name text-nowrap">{item.name}</a>
                  <div className="operate">
                    <i className="btn play sprite_02" onClick={e => addAndPlaySong(item)} />
                    <i className="btn addto sprite_icon2" onClick={e => addSong(item)} />
                    <i className="btn favor sprite_02" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a>查看全部 ></a>
      </div>
    </ListTableStyle>
  )
})