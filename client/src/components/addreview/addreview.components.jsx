import React, { useState } from "react";
import restaurantFindersApis from "../../apis/restaurants/restaurantFinders.apis";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {id} = useParams()
  const [reviewState, setReviewState] = useState({
    name: "",
    rating: "",
    review: "",
  });

  const {name, rating, review} = reviewState

  const handleChange = (e) => {
    const {name, value} = e.target
    setReviewState({...reviewState, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const postReviews = async () => {
        await restaurantFindersApis.post(`/${id}/addReview`, reviewState)
        .then((res) => {
          navigate(location.pathname, {replace: true})
        })
      }

      postReviews()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-4">
      <div className="row mb-2">
        <div className="col-8">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <label htmlFor="rating">Rating</label>
          <select name="rating" value={rating} onChange={handleChange} id="rating" className="form-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <label htmlFor="review">Review</label>
          <textarea
            className="form-control"
            name="review"
            value={review}
            onChange={handleChange}
            id="review"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-2">
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
