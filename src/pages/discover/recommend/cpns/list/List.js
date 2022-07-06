import React, {memo, useEffect} from "react";
import {ListStyle} from './style'
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {saveListAction} from '@/store/discoverStore/action'

import {RcmdHeader, ListTable} from "@/components"

export default memo(function NewDiscShelf(props){
  const dispatch = useDispatch()
  const {soaringList,newSongList,originalList,dailySongs} = useSelector((state) => ({
    soaringList: state.recommend.get('soaringList'),
    newSongList: state.recommend.get('newSongList'),
    originalList: state.recommend.get('originalList'),
    dailySongs: state.recommend.get('dailySongs')
  }),shallowEqual)

  //获取飙升版，新歌榜，原创榜action
  useEffect(() => {
    dispatch(saveListAction())
  },[dispatch])

  return (
    <ListStyle>
      <RcmdHeader title="榜单" more={true} />
      <div className="top">
        <ListTable listInfo={soaringList} songList={dailySongs.slice(0,10)} />
        <ListTable listInfo={newSongList} songList={dailySongs.slice(10,20)} />
        <ListTable listInfo={originalList} songList={dailySongs.slice(20,30)} />
      </div>
    </ListStyle>
  )
})