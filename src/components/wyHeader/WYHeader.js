import React, { memo } from "react";
import { NavLink } from "react-router-dom";
//样式
import { HeaderStyle } from './style'
//路由映射
import { headerLinks } from '@/common/local-data.js'
//antd
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default memo(function Header(props){
  console.log(props)
  return (
    <HeaderStyle>
      <div className="content wrap-v1">
        <div className="left">
          <div className="logo sprite_01" />
          <div className="select-list">
            {
              headerLinks.map( (item, index) => {
                return index < 3
                  ? <div className='select-item' key={index}>
                    <NavLink exact to={item.link}>{item.title}
                      <i className='sprite_01 icon' />
                    </NavLink>
                  </div>
                  : <div className='select-item' key={index}>
                    <a href={item.link}>{item.title}</a>
                  </div>
              })
            }
          </div>
        </div>
        <div className="right">
          <Input className="search" size='middle' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <button className="center">创建者中心</button>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderStyle>
  )
})