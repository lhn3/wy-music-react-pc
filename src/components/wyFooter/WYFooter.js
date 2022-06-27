import React, { memo, Fragment } from "react";
import { FooterStyle } from "./style";
import { footerLinks, footerImages } from "@/common/local-data";

export default memo(function Footer(){
  return (
    <FooterStyle>
      <div className="wrap-v2 content">
        <div className="left">
          <div className="link">
            {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2020</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
            </span>
          </div>
          <div className="report">
            <span>
              <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
            </span>
            <span>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noopener noreferrer"> 浙公网安备 33010902002564号</a>
            </span>
          </div>
          <div className="info">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          </div>
        </div>
        <div className="right">
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title">{item.title}</span>
                </li>
              )
            })
          }
        </div>
      </div>
    </FooterStyle>
  )
})