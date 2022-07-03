import React, {memo, useEffect, useState} from "react"
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {saveSongUrlAction} from "@/store/player/action"
import {Slider} from "antd"
import {PlayerBarStyle} from './style'
import {formatTime} from "@/utils/format";


export default memo(function PlayerBar(){
  const [isLock,setLock] = useState(true)
  const [isPlay,setPlay] = useState(false)
  const [sequence,setSequence] = useState(3)

  const dispatch = useDispatch()
  const {songUrl,dt,imgUrl,songName,artName} = useSelector(state => ({
    songUrl: state.player.get("songUrl"),
    dt: state.player.get("dt"),
    imgUrl: state.player.get("imgUrl"),
    songName: state.player.get("songName"),
    artName: state.player.get("artName")
  }),shallowEqual)

  //请求播放信息
  useEffect(() => {
    dispatch(saveSongUrlAction(1824045033))
  },[dispatch])

  //修改播放模式
  const changeLoop = () => {
    if (sequence != 3) {
      setSequence(sequence + 1)
    } else {
      setSequence(1)
    }
  }
  return (
    <PlayerBarStyle isPlay={isPlay} isLock={isLock} sequence={sequence}>
      <div className="main sprite_player">
        {/*中间的播放控件*/}
        <div className="content">
          {/*左边上一首下一首*/}
          <div className="control">
            <div className="prev sprite_player" />
            <div className="play sprite_player" onClick={e => setPlay(!isPlay)} />
            <div className="next sprite_player" />
          </div>
          {/*中间进度条信息*/}
          <div className="play-info">
            <img src={imgUrl} className="image" />
            <div className="info">
              <div className="song">
                <a>{songName}</a>
                <a className="singer-name">{artName}</a>
              </div>
              {/*进度条*/}
              <div className="progress">
                <Slider defaultValue={30} />
                <div className="time">
                  <span className="now-time">00:00</span>
                  <span className="divider">/</span>
                  <span className="now-time">{formatTime(dt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/*右边收藏/播放模式*/}
          <div className="operator">
            <div className="btn favor sprite_player" />
            <div className="btn share sprite_player" />
            <div className="btn right sprite_player">
              <div className="btn volume sprite_player" />
              <div className="btn loop sprite_player" onClick={e => changeLoop()} />
              <div className="btn playlist sprite_player" />
            </div>
          </div>
        </div>
      </div>

      {/*右边的锁*/}
      <div className="lock sprite_player">
        <div className="lock-icon sprite_player" onClick={e => setLock(!isLock)} />
      </div>
    </PlayerBarStyle>
  )
})