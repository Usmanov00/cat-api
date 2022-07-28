import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


const initialState = {
  favorites: [],
}//  вот это стэйт ...state - это стейт

const storeReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {...state, favorites: [...state.favorites, action.payload]}
    case  'REMOVE_FROM_FAVORITES':
      return {...state, favorites: [...state.favorites.filter(cat => cat.id !== action.payload.id)]}
    default:
      return state
  }
}

export const store = createStore(storeReducer, composeWithDevTools(
  applyMiddleware()
))

// {type: 'ADD_TO_FAVORITES', payload: {КОТ БУДЕТ ХРАНИТЬСЯ ЗДЕСТЬ}}