import Discover from "@/pages/Discover";
import Mine from "@/pages/Mine";
import Friends from "@/pages/Friends";

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