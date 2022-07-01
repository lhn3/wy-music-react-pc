import React, {memo, useEffect} from "react";
import {ListStyle} from './style'
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import {saveListAction} from '@/store/discoverStore/action'

import {RcmdHeader, ListTable} from "@/components"

export default memo(function NewDiscShelf(props){
  const dispatch = useDispatch()
  const {soaringList,newSongList,originalList} = useSelector((state) => ({
    soaringList: state.recommend.get('soaringList'),
    newSongList: state.recommend.get('newSongList'),
    originalList: state.recommend.get('originalList')
  }),shallowEqual)

  //获取飙升版，新歌榜，原创榜action
  useEffect(() => {
    dispatch(saveListAction())
  },[dispatch])

  return (
    <ListStyle>
      <RcmdHeader title="榜单" more={true} />
      <div className="top">
        <ListTable listInfo={soaringList} />
        <ListTable listInfo={newSongList} />
        <ListTable listInfo={originalList} />
      </div>
    </ListStyle>
  )
})