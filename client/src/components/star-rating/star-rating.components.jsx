import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    i <= rating
      ? stars.push(<i class="fa-solid fa-star" style={{color:"gold"}}></i>)
      : !Number.isInteger(rating) && i === Math.ceil(rating)
      ? stars.push(<i class="fa-regular fa-star-half-stroke" style={{color:"gold"}}></i>)
      : stars.push(<i class="fa-regular fa-star" style={{color:"gold"}}></i>);
  }
  return <>{stars}</>;
};

export default StarRating;
