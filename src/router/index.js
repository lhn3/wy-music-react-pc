import { Redirect } from "react-router-dom";
import React from "react";
import {
  Discover,
  Recommend,
  Ranking,
  Songs,
  Djradio,
  Artist,
  Album,
  PlayerInfoPage,

  Mine,
  Friends
} from '@/pages'

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