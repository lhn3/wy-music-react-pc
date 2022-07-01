import React, {memo, useEffect} from "react";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {saveResidentSingerAction} from '@/store/discoverStore/action'
import {ResidentSingerStyle} from "./style";

export default memo(function ResidentSinger(){
  const dispatch = useDispatch()
  const {residentSinger} = useSelector((state) => ({
    residentSinger: state.recommend.get('residentSinger')
  }),shallowEqual)

  useEffect(() => {
    dispatch(saveResidentSingerAction(0,5))
  },[dispatch])
  return (
    <ResidentSingerStyle>
      <div className="header">
        <div className="tip">入驻歌手</div>
        <a className="all">查看全部 ></a>
      </div>
      {
        residentSinger.map(item => {
         return (
           <div className="singer" key={item.id}>
             <img src={item.picUrl} />
             <div className="info">
               <span className="name text-nowrap">{item.name}</span>
               <span className="desc text-nowrap">{item.alias.join('-')}</span>
             </div>
           </div>
         )
        })
      }
      <button className="bottom sprite_button">申请成为网易音乐人</button>
    </ResidentSingerStyle>
  )
})