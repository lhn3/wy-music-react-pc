import React, {memo} from "react";
import {ListTableStyle} from "./style";

export default memo(function ListTable(props){
  const { listInfo } = props
  let songLis = [
    {id:1, name:'孤勇者'},
    {id:2, name:'玫瑰花的葬礼'},
    {id:3, name:'断桥残雪'},
    {id:4, name:'江南'},
    {id:5, name:'长安别'},
    {id:6, name:'Cheap Thrills'},
    {id:7, name:'我爱你不问归期'},
    {id:8, name:'我的楼兰'},
    {id:9, name:'窗'},
    {id:10, name:'Right Now'}
  ]

  return (
    <ListTableStyle>
      <div className="header">
        <div className="image sprite_covor">
          <img src={listInfo.coverImgUrl}/>
          <a className="image_cover"/>
        </div>
        <div className="info">
          <a>{listInfo.name}</a>
          <div>
            <i className="btn play sprite_02" />
            <i className="btn favor sprite_02" />
          </div>
        </div>
      </div>
      <div className="list">
        {
          songLis.map(item => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{item.id}</div>
                <div className="info">
                  <a className="name text-nowrap">{item.name}</a>
                  <div className="operate">
                    <i className="btn play sprite_02" />
                    <i className="btn addto sprite_icon2" />
                    <i className="btn favor sprite_02" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a>查看全部 ></a>
      </div>
    </ListTableStyle>
  )
})