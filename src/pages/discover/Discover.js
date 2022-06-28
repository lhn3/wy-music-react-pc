import React, { memo } from "react";
import {DiscoverStyle, TopMenu,} from "./style";
import {dicoverMenu} from "@/common/local-data";
import {NavLink} from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function Discover(props){
  return (
    <DiscoverStyle>
      <div className="top">
        {/*二级路由*/}
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.children)}
    </DiscoverStyle>
  )
})