import React,{memo} from "react";
import {SongsCoverStyle} from './style'
import {formatCount} from '@/utils/format'

export default memo(function SongsCover(props){
  const {item} = props
  return (
    <SongsCoverStyle>
      <div className="cover-top">
        <img src={item.picUrl}/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <div>
              <i className="erji sprite_icon" />
              <span>{formatCount(item.playCount)}</span>
            </div>
            <i className="play sprite_icon" />
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {item.name}
      </div>
      <div className="cover-source">
        作者
      </div>
    </SongsCoverStyle>
  )
})