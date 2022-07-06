import React,{memo} from "react";
import {PlayerInfoPageStyle} from './style'

export default memo(function PlayerInfoPage(props){
  console.log(props)
  return (
    <PlayerInfoPageStyle>
      <div className="content wrap-v2">
        <div className="player-left">
          1234
        </div>
        <div className="player-right">
          <h2>{props.location.search}</h2>
        </div>
      </div>
    </PlayerInfoPageStyle>
  )
})