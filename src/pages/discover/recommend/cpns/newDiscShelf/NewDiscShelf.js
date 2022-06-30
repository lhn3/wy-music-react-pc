import React, {memo, useEffect} from "react";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {saveNewDiscShelfAction} from '@/store/discoverStore/action'
import {NewDiscShelfStyle} from './style'

import {RcmdHeader,DiscBanner} from "@/components"

export default memo(function NewDiscShelf(props){
  const dispatch = useDispatch()
  const {newDiscShelfs} = useSelector((state) => ({
    newDiscShelfs:state.recommend.get('newDiscShelfs')
  }),shallowEqual)

  useEffect(()=>{
    dispatch(saveNewDiscShelfAction(14))
  },[dispatch])

  return (
    <NewDiscShelfStyle>
      <RcmdHeader title="新碟上架" more={true} />
      {/*轮播碟*/}
      <DiscBanner info={newDiscShelfs} />
    </NewDiscShelfStyle>
  )
})