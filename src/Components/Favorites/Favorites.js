import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CatCard from "../CatCard";

const Favorites = () => {
  const dispatch = useDispatch()
  const {favorites} = useSelector((store) => store)

  const removeFromFavorites = (cat) => {
    dispatch({type: 'REMOVE_FROM_FAVORITES', payload: cat})
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
        {
          favorites.length ? favorites.map(cat => (<CatCard cat={cat} action={removeFromFavorites}/>)) : <span>Пусто</span>
        }
      </div>
    </div>
  );
};

export default Favorites;