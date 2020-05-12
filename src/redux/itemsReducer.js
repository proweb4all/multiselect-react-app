import { } from "./types"

const initState = {
  items: []
}

export const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    // case CREATE_POST: 
    //   // return { ...state, posts: state.posts.concat(action.payload) }
    //   return { ...state, posts: [...state.posts, action.payload] }
    default: return state
  }
}