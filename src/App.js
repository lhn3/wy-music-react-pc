import React, { memo, Suspense } from "react";
//公共组件
import { WYHeader, WYFooter } from '@/components'
//底部播放组件
import {PlayerBar} from '@/pages'
//前端路由
import routes from '@/router'
import { renderRoutes } from "react-router-config";


export default memo(function App() {
  return (
    <>
      <WYHeader />
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <WYFooter />
      <PlayerBar />
    </>
  );
})
