import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRestaurantContext } from "../provider/restaurant/restaurant.provider";
import restaurantFindersApis from "../apis/restaurants/restaurantFinders.apis";
// import StarRating from '../components/star-rating/star-rating.components'
import Reviews from "../components/reviews/reviews.components";
import AddReview from "../components/addreview/addreview.components";

const RestaurantDetailPage = () => {
  const { selectedRestaurants, setSelectedRestaurant } = useRestaurantContext();
  const { id } = useParams();
  const [reviewToggle, setReviewToggle] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        await restaurantFindersApis.get(`/${id}`).then((res) => {
          setSelectedRestaurant(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchRestaurant();
  }, [reviewToggle]);

  const handleToggle = () => {
    setReviewToggle(!reviewToggle);
  };

  return (
    <div className="container">
      <h1 style={{cursor:"pointer"}} onClick={() => {navigate('/')}}>
        {selectedRestaurants ? selectedRestaurants.values[0].name : "Loading"}
      </h1>
      <Reviews
        reviews={selectedRestaurants ? selectedRestaurants.reviews : []}
      />
      <AddReview handleToggle={handleToggle} />
    </div>
  );
};

export default RestaurantDetailPage;
