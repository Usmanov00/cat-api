import React from 'react';

const CatCard = ({cat, action}) => {
  return (
      <div key={cat.id} className="cat-card w-full h-48 relative rounded-lg flex flex-col justify-center items-center">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="object-center object-cover h-full w-full"
             src={cat.url}
             alt="photo"/>
        <div className="favorite" onClick={() => action(cat)}/>
      </div>
  );
};

export default CatCard;