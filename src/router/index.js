import { Redirect } from "react-router-dom";
import React,{lazy} from "react";
// import {
//   Discover,
//   Recommend,
//   Ranking,
//   Songs,
//   Djradio,
//   Artist,
//   Album,
//   PlayerInfoPage,
//
//   Mine,
//   Friends
// } from '@/pages'

//路由懒加载
const Discover  = lazy(() => import('../pages/discover/Discover'))
const Recommend = lazy(() => import('../pages/discover/recommend/Recommend'))
const Ranking = lazy(() => import('../pages/discover/ranking/Ranking'))
const Songs = lazy(() => import('../pages/discover/songs/Songs'))
const Djradio = lazy(() => import('../pages/discover/djradio/Djradio'))
const Artist = lazy(() => import('../pages/discover/artist/Artist'))
const Album = lazy(() => import('../pages/discover/album/Album'))
const PlayerInfoPage = lazy(() => import('../pages/player/playerInfoPage/PlayerInfoPage'))
const Mine = lazy(() => import('../pages/mine/Mine'))
const Friends = lazy(() => import('../pages/friends/Friends'))

const routes = [
  {
    path: '/',
    exact: true,
    //重定向
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path:'/discover',
    // exact:true,
    // render: () => (
    //   <Redirect to="/discover/recommend"/>
    // ),
    component: Discover,
    children:[
      {
        path: "/discover/recommend",
        exact: true,
        component:Recommend
      },
      {
        path: "/discover/ranking",
        exact: true,
        component:Ranking
      },
      {
        path: "/discover/songs",
        exact: true,
        component:Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component:Djradio
      },
      {
        path: "/discover/artist",
        exact: true,
        component:Artist
      },
      {
        path: "/discover/album",
        exact: true,
        component:Album
      },
      {
        path: "/discover/song",
        exact: true,
        component:PlayerInfoPage
      },
    ]
  },
  {
    path:'/mine',
    exact:true,
    component:Mine
  },
  {
    path:'/friends',
    exact:true,
    component:Friends
  },
]

export default routes