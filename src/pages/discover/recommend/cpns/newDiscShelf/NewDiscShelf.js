import React,{memo} from "react";
import {NewDiscShelfStyle} from './style'
import {RcmdHeader} from "@/components"

export default memo(function NewDiscShelf(props){
  return (
    <NewDiscShelfStyle>
      <RcmdHeader title="新碟上架" more={true} />
    </NewDiscShelfStyle>
  )
})