import React,{ memo, useRef, useState, useCallback } from "react";
import { BannerStyle, BannerLeft, BannerRight, BannerControl } from './style'
import { Carousel } from 'antd';

export default memo(function TopBanner(props){
  const bannerRef = useRef()
  const [bgImage, setBgImage] = useState('')

  //轮播图切换修改背景图
  const beforeChange = useCallback((from, to) => {
    setBgImage(props.banners[to].imageUrl + '?imageView&blur=40x20')
  })

  return(
    <BannerStyle bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={bannerRef} effect="fade" autoplay beforeChange={beforeChange}>
            {
              props.banners.map(item => {
                return (
                  <div key={item.encodeId} className="banner-item">
                    <img className="image" src={item.imageUrl}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()} />
          <button className="btn right" onClick={e => bannerRef.current.next()} />
        </BannerControl>
      </div>
    </BannerStyle>
  )
})