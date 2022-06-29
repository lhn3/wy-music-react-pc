import React,{memo} from "react";
import PropTypes from "prop-types"
import {RcmdHeaderStyle} from './style'

const RcmdHeader =  memo(function RcmdHeader(props){
  const {title, keyword, more} = props
  return (
    <RcmdHeaderStyle className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keyword.map((item, index) => {
              return (
                <div key={item.id} className="item">
                  <a href={item.url}>{item.title}</a>
                  {
                    index + 1 == keyword.length ? null : <span className="divider">|</span>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      {
        more ?
          <div className="right">
            <a href="">更多</a>
            <i className="icon sprite_02" />
          </div> : null
      }
    </RcmdHeaderStyle>
  )
})

RcmdHeader.prototype = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.array,
  more: PropTypes.bool
}

RcmdHeader.defaultProps = {
  keyword: [],
  more: false
}

export default RcmdHeader