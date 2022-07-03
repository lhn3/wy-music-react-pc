import React, {memo, useEffect} from "react";
import {PopularAnchorStyle} from "./style";
import {useDispatch,useSelector,shallowEqual} from "react-redux";

import {savePopularAnchorAction} from '@/store/discoverStore/action'

export default memo(function PopularAnchor(){
  const dispatch = useDispatch()
  const {popularAnchor} = useSelector((state) => ({
    popularAnchor: state.recommend.get('popularAnchor')
  }),shallowEqual)

  useEffect(() => {
    dispatch(savePopularAnchorAction(10))
  },[dispatch])

  return (
    <PopularAnchorStyle>
      <div className="header">
        <div className="tip">热门主播</div>
      </div>
      {
        popularAnchor.map(item => {
          return (
            <div className="anchor" key={item.id}>
              <img className="avatar" src={item.avatarUrl} />
              <div className="info">
                <span className="name text-nowrap">{item.nickName}</span>
                {
                  item.avatarDetail ? <img src={item.avatarDetail.identityIconUrl} className="icon" /> : null
                }
              </div>
            </div>
          )
        })
      }
    </PopularAnchorStyle>
  )
})