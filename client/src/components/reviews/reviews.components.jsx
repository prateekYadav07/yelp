import React from "react";
import StarRating from "../star-rating/star-rating.components";

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div class="card">
        <h5 class="card-header d-flex justify-content-between">Name</h5>
        <div class="card-body">
          <h5 class="card-title"><StarRating rating={3}/></h5>
          <p class="card-text">
            Review
          </p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Name</h5>
        <div class="card-body">
          <h5 class="card-title"><StarRating rating={3}/></h5>
          <p class="card-text">
            Review
          </p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Name</h5>
        <div class="card-body">
          <h5 class="card-title"><StarRating rating={3}/></h5>
          <p class="card-text">
            Review
          </p>
        </div>
      </div>

      <div class="card">
        <h5 class="card-header">Name</h5>
        <div class="card-body">
          <h5 class="card-title"><StarRating rating={3}/></h5>
          <p class="card-text">
            Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
