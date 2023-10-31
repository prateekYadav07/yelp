import React, { useState } from "react";
import StarRating from "../star-rating/star-rating.components";

const Reviews = ({ reviews }) => {
  // console.log(reviews);
  return (
    <div className="container">
      <div className="row row-cols-3 mb-3">
        {reviews.map((review) => {
          return (
            <div
              className="card text-bg-success me-2 mb-2"
              style={{ width: "18rem" }}
              key={review.id}
            >
              <h5 className="card-header d-flex justify-content-between">
                {review.name}
              </h5>
              <div className="card-body">
                <h5 className="card-title">
                  <StarRating rating={review.rating} />
                </h5>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          );
        })}

        {/* <div className="card me-3" style={{width:"18rem"}}>
          <h5 className="card-header">Name</h5>
          <div className="card-body">
            <h5 className="card-title"><StarRating rating={3}/></h5>
            <p className="card-text">
              Review
            </p>
          </div>
        </div>

        <div className="card me-3" style={{width:"18rem"}}>
          <h5 className="card-header">Name</h5>
          <div className="card-body">
            <h5 className="card-title"><StarRating rating={3}/></h5>
            <p className="card-text">
              Review
            </p>
          </div>
        </div>

        <div className="card me-3" style={{width:"18rem"}}>
          <h5 className="card-header">Name</h5>
          <div className="card-body">
            <h5 className="card-title"><StarRating rating={3}/></h5>
            <p className="card-text">
              Review
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Reviews;
