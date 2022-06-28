
//recommend
const recommendState = {
  banners:[]
}

export function recommendReducer(state=recommendState, action){
  switch (action.type){
    case 'saveBanners':
      return {...state,banners: action.payload}
    default:
      return state
  }
}