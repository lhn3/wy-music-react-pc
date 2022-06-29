import React,{memo,useEffect} from "react";
import {actionObj, saveBannersAction} from "@/store/discoverStore/action";
import {connect,useStore,useDispatch,useSelector,shallowEqual} from "react-redux";
import {TopBanner} from "@/components";

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
    <>
      <TopBanner banners={banners} />
    </>
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