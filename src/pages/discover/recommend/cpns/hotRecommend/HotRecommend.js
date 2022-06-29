import React,{memo,useEffect,Fragment} from "react";
import {useDispatch,useSelector,shallowEqual} from "react-redux";
import {saveHotRecommendAction} from "@/store/discoverStore/action";
import {HotRecommendStyle} from './style'
import {RcmdHeader,SongsCoverStyle} from "@/components"

export default memo(function HotRecommend(props){
  const dispatch = useDispatch()
  const {hotRecommends} = useSelector((state) => ({
    hotRecommends: state.recommend.get('hotRecommends')
  }),shallowEqual)

  useEffect(() => {
    dispatch(saveHotRecommendAction(8))
  },[dispatch])

  return (
    <HotRecommendStyle>
      <RcmdHeader title="热门推荐" keyword={[{id:1,title:'华语'},{id:2,title:'流行'},{id:3,title:'摇滚'}]} more={true} />
      <div className="songs">
        {
          hotRecommends.map(item => {
            return (
              <div key={item.id} className="song-item">
                <SongsCoverStyle item={item}/>
              </div>
            )
          })
        }
      </div>
    </HotRecommendStyle>
  )
})