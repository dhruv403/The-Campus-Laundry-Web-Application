import React from 'react'
import Star from './Star';

export default function StarRating(props) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {props.stars >= index + 1 ? (
          <Star val={3} className = {props.className}/>
        ) : props.stars >= number ? (
          <Star val={2} className = {props.className}/>
        ) : (
          <Star val={1} className = {props.className}/>
        )}
      </span>
    );
  });

  return (
    <div>
      {ratingStar}
    </div>
  )
}
