import {
  Discover,
  Mine,
  Friends
} from '@/pages'

const routes = [
  {
    path:'/',
    exact:true,
    component:Discover
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