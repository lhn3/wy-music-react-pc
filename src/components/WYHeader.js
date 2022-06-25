import React, { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function Header(){
  return (
    <>
      <h1>Header</h1>
      <NavLink exact to='/'>发现音乐</NavLink>
      <NavLink exact to='/mine'>我的音乐</NavLink>
      <NavLink exact to='/friends'>朋友</NavLink>
    </>
  )
})