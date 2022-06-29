import React,{memo,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {saveHotRecommendAction} from "@/store/discoverStore/action";
import {HotRecommendStyle} from './style'
import {RcmdHeader} from "@/components"

export default memo(function HotRecommend(props){
  const dispatch = useDispatch()
  const {hotRecommends} = useSelector((state) => ({
    hotRecommends: state.recommend.get('hotRecommends')
  }))

  useEffect(() => {
    dispatch(saveHotRecommendAction())
  },[dispatch])

  return (
    <HotRecommendStyle>
      <RcmdHeader title="热门推荐" keyword={[{id:1,title:'华语'},{id:2,title:'流行'},{id:3,title:'摇滚'}]} more={true} />
    </HotRecommendStyle>
  )
})