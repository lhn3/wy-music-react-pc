import React,{memo,useEffect} from "react";
import {actionObj, saveBannersAction, saveHotRecommendAction} from "@/store/discoverStore/action";
import {connect,useStore,useDispatch,useSelector,shallowEqual} from "react-redux";
import {RecommendStyle} from './style'

import {TopBanner} from "@/components";
import HotRecommend from './cpns/hotRecommend/HotRecommend'
import NewDiscShelf from "./cpns/newDiscShelf/NewDiscShelf";
import LoginTip from "./cpns/loginTip/LoginTip";
import ResidentSinger from "./cpns/residentSinger/ResidentSinger";
import PopularAnchor from "./cpns/popularAnchor/PopularAnchor";
import List from "./cpns/list/List"

const Recommend = memo((props) => {
  //使用hooks
  /**
   * const store = useStore()
   * <h1>{store.getState().recommend.banners.length}</h1>
   * shallowEqual浅层比较，优化useSelector性能
   */
  const dispatch = useDispatch()
  //拿redux中的数据
  const {banners} = useSelector((state) => ({
    banners: state.recommend.get('banners')
  }), shallowEqual)

  useEffect (() => {
    //通过redux请求获取轮播图数据
    dispatch(saveBannersAction())
  },[dispatch])

  return (
    <RecommendStyle>
      {/*轮播图*/}
      <TopBanner banners={banners} />

      {/*主体内容，分左右*/}
      <div className='recommend-main wrap-v2'>
        <div className="recommend-left">
          {/*热门推荐*/}
          <HotRecommend />
          {/*新碟上架*/}
          <NewDiscShelf />
          {/*榜单*/}
          <List />
        </div>
        <div className="recommend-right">
          {/*登录提醒*/}
          <LoginTip />
          {/*入驻歌手*/}
          <ResidentSinger />
          {/*热门主播*/}
          <PopularAnchor />
        </div>
      </div>
    </RecommendStyle>
  )
})


export default Recommend
/**
 * //构建接收的参数和方法
 * const mapState = state => ({banners:state.recommend.banners})
 * const mapDispatch = dispatch => ({
 *  saveBanners(){
 *    dispatch(saveBannersAction())
 * }
 * })
 * //调用高阶组件传入参数并返回
 * export default connect(mapState,mapDispatch)(Recommend)
 */