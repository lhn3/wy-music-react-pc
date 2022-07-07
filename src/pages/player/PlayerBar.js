import React, {memo, useEffect, useRef, useState, useCallback} from "react"
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {saveSongLyric,actionObj} from "@/store/player/action"
import {Slider} from "antd"
import {PlayerBarStyle} from './style'
import {formatTime} from "@/utils/format";
import {NavLink} from "react-router-dom";


export default memo(function PlayerBar(props){
  //播放组件
  const audioRef = useRef()
  //播放组件显示隐藏
  const [isLock,setLock] = useState(true)
  // //是否播放按钮
  // const [isPlay,setPlay] = useState(false)
  //播放模式
  // const [sequence,setSequence] = useState(3)
  //播放当前时间
  const [currentTime,setCurrentTime] = useState(0)
  // 进度条的值
  const [sliderValue,setSliderValue] = useState(0)
  //进度条是否正在被修改
  const [isChangeSlider,setIsChangeSlider] = useState(false)

  const dispatch = useDispatch()
  const {isPlay,id,songUrl,dt,imgUrl,songName,artName,currentIndex,playlist,sequence} = useSelector(state => ({
    isPlay: state.player.get("isPlay"),
    id:state.player.get('songInfo').id,
    songUrl: state.player.get("songInfo").songUrl,
    dt: state.player.get("songInfo").dt,
    imgUrl: state.player.get("songInfo").imgUrl,
    songName: state.player.get("songInfo").songName,
    artName: state.player.get("songInfo").artName,
    currentIndex: state.player.get("currentIndex"),
    playlist: state.player.get("playlist"),
    sequence: state.player.get("sequence")
  }),shallowEqual)

  //监听是否播放
  useEffect(() => {
    dispatch(actionObj('saveAudioRef',audioRef))
  },[])

  //请求播放信息/url/歌词
  useEffect(() => {
    //设置播放路径
    audioRef.current.src = songUrl
  },[songUrl])

  // 无效
  // //前面插入数据需要修改currentIndex
  // useEffect(()=> {
  //   let currentIndex = playlist.findIndex(item => item.id === id)
  //   console.log(currentIndex,'+++++++++++++')
  //   dispatch(actionObj('saveCurrentIndex',currentIndex))
  // },[id])

  //重新播放新歌曲
  const rePlayNewSong = () => {
    audioRef.current.pause()
    setCurrentTime(0)
    setSliderValue(0)
    audioRef.current.src = songUrl
    audioRef.current.currentTime = 0
    setTimeout(()=>{
      audioRef.current.play()
      dispatch(actionObj('saveIsPlay',true))
    },100)
  }

  //点击按钮开始或暂停播放
  const playOrPause = () => {
    if (!songUrl) {
      alert('暂无歌曲！')
      return
    }
    isPlay ? audioRef.current.pause() : audioRef.current.play()
    dispatch(actionObj('saveIsPlay',!isPlay))
  }

  //上一首/下一首
  const changeSong = (tag) => {
    /**
     * 播放模式：1随机，2单曲，3顺序
     * 先判断播放模式
     * 在判断上一首还是下一首
     * 修改播放索引，播放信息（songInfo），播放时间，进度条
     */
    let newCurrentIndex = null
    if (sequence == 1){
      newCurrentIndex = Math.floor(Math.random()*playlist.length)
      if (newCurrentIndex === currentIndex) {
        changeSong(tag)
        return
      }
    } else if (sequence == 2){
      newCurrentIndex = currentIndex
    } else {
      newCurrentIndex = currentIndex + tag
      if (newCurrentIndex < 0) {
        newCurrentIndex = playlist.length - 1
      } else if (newCurrentIndex === playlist.length) {
        newCurrentIndex = 0
      }
    }
    console.log('newCurrentIndex:',newCurrentIndex,'----------------')
    dispatch(actionObj('saveCurrentIndex', newCurrentIndex))
    dispatch(actionObj('saveSongInfo', playlist[newCurrentIndex]))
    //播放新歌曲
    rePlayNewSong()
  }

  //设置当前播放时间和进度条
  const timeUpdate = (e) => {
    //进度条在被手动修改的时候不进行时间和进度条的自动更新
    if (!isChangeSlider){
      setCurrentTime(e.target.currentTime * 1000)
      setSliderValue(Math.floor(currentTime / dt * 100))
    }
  }

  //拖拽进度条时
  const changeSlider = useCallback((e) => {
    setIsChangeSlider(true)
    setSliderValue(e)
    setCurrentTime(e / 100 * dt)
  },[dt])

  //进度条修改结束时
  const afterChangeSlider = useCallback((e) => {
    audioRef.current.currentTime = (e / 100 * dt / 1000)
    setIsChangeSlider(false)
  },[dt])

  //修改播放模式
  const changeLoop = () => {
    if (sequence != 3) {
      dispatch(actionObj('saveSequence',sequence+1))
    } else {
      dispatch(actionObj('saveSequence',1))
    }
  }
  return (
    <PlayerBarStyle isPlay={isPlay} isLock={isLock} sequence={sequence}>
      <div className="main sprite_player">
        {/*中间的播放控件*/}
        <div className="content">
          {/*左边上一首下一首*/}
          <div className="control">
            <div className="prev sprite_player" onClick={e => changeSong(-1)} />
            <div className="play sprite_player" onClick={e => playOrPause()} />
            <div className="next sprite_player" onClick={e => changeSong(1)} />
          </div>
          {/*中间进度条信息*/}
          <div className="play-info">
            <NavLink to={{pathname: '/discover/song',search:'?id=1824045033'}}>
              <img src={imgUrl} className="image" />
            </NavLink>
            <div className="info">
              <div className="song">
                <a>{songName}</a>
                <a className="singer-name">{artName}</a>
              </div>
              {/*进度条*/}
              <div className="progress">
                <Slider value={sliderValue} onChange={e => changeSlider(e)} onAfterChange={e => afterChangeSlider(e)} />
                <div className="time">
                  <span className="now-time">{formatTime(currentTime)}</span>
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
              <div className="btn playlist sprite_player">
                <div className="playlist-length">{playlist.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*右边的锁*/}
      <div className="lock sprite_player">
        <div className="lock-icon sprite_player" onClick={e => setLock(!isLock)} />
      </div>

      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => changeSong(1)} />
    </PlayerBarStyle>
  )
})