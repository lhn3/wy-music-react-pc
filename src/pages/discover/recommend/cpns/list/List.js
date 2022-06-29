import React,{memo} from "react";
import {ListStyle} from './style'
import {RcmdHeader} from "@/components"

export default memo(function NewDiscShelf(props){
  return (
    <ListStyle>
      <RcmdHeader title="榜单" more={true} />
    </ListStyle>
  )
})