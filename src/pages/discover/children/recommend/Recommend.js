import React,{memo,useEffect} from "react";
import {actionObj, saveBannersAction} from "@/store/discoverStore/action";
import {connect} from "react-redux";

const Recommend = memo((props) => {
  useEffect (() => {
    props.saveBanners()
  },[])
  return (
    <>
      Recommend
    </>
  )
})

//构建接收的参数和方法
const mapState = state => ({banners:state.recommend.banners})
const mapDispatch = dispatch => ({
  saveBanners(){
    dispatch(saveBannersAction)
  }
})

//调用高阶组件传入参数并返回
export default connect(mapState,mapDispatch)(Recommend)