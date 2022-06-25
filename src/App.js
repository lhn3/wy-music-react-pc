import React, { memo } from "react";
//公共组件
import { WYHeader, WYFooter } from '@/components'
//前端路由
import routes from '@/router'
import { renderRoutes } from "react-router-config";


export default memo(function App() {
  return (
    <>
      <WYHeader />
      {renderRoutes(routes)}
      <WYFooter />
    </>
  );
})
