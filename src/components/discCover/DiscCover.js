import React, {memo, useEffect, useRef, useState} from "react";
import {DiscCoverStyle} from './style'

export default memo(function DiscCover(props){
  /**
   * size = 100 / 130
   * width = 118 / 153
   * bgp = -570 / -845
   */
  const {item, size = 100, width = 118, bgp = -570 } = props

  return (
    <DiscCoverStyle size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <div className="img-box">
          <img src={item.coverUrl}/>
        </div>
        <div className="cover sprite_covor" />
        <i className="play sprite_icon" />
      </div>
      <div className="album-info">
        <a className="name text-nowrap">{item.albumName}</a>
        <a className="artist text-nowrap">{item.artistName}</a>
      </div>
    </DiscCoverStyle>
  )
})