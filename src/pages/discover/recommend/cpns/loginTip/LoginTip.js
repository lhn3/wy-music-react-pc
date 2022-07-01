import React,{memo} from "react";
import {LoginTipStyle} from "./style";

export default memo(function LoginTip(){
  return (
    <LoginTipStyle className="sprite_02">
      <div className="tip">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <button className="btn sprite_02">用户登录</button>
    </LoginTipStyle>
  )
})