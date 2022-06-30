import React, {memo, useEffect, useRef, useState} from "react";
import {NewDiscBannerStyle} from './style'
import { Carousel } from 'antd';

import {DiscCover} from '@/components'

export default memo(function DiscBanner(props){
  const {info} = props
  const bannerRef = useRef()
  const [bannerPage,setBannerPage] = useState([])

  //生成轮播页数索引
  useEffect(()=>{
    let arr = []
    let index = 0
    for (let i = 0; i < info.length; i = i + 5) {
      arr.push(index)
      index += 1
    }
    setBannerPage(arr)
  },[info])

  return (
    <NewDiscBannerStyle>
      <div className="arrow arrow-left sprite_02" onClick={e => bannerRef.current.prev()} />
      <div className="album">
        <Carousel ref={bannerRef} dots={false}>
          {
            bannerPage.map(page => {
              return (
                <div key={page} className="page">
                  {
                    info.slice(page*5, (page+1)*5).map(item => {
                      return (
                        <div key={item.id} className="ant-carousel">
                          <DiscCover size={100} width={118} bgp={-570} item={item} />
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="arrow arrow-right sprite_02" onClick={e => bannerRef.current.next()} />
    </NewDiscBannerStyle>
  )
})
