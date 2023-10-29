import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    i <= rating
      ? stars.push(<i class="fa-solid fa-star"></i>)
      : !Number.isInteger(rating) && i === Math.ceil(rating)
      ? stars.push(<i class="fa-regular fa-star-half-stroke"></i>)
      : stars.push(<i class="fa-regular fa-star"></i>);
  }
  return <>{stars}</>;
};

export default StarRating;
