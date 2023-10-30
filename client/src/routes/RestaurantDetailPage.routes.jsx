import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurantContext } from '../provider/restaurant/restaurant.provider'
import restaurantFindersApis from '../apis/restaurants/restaurantFinders.apis'
import StarRating from '../components/star-rating/star-rating.components'
import Reviews from '../components/reviews/reviews.components'
import AddReview from '../components/addreview/addreview.components'

const RestaurantDetailPage = () => {
  const {selectedRestaurants, setSelectedRestaurant} = useRestaurantContext()
  const {id} = useParams()
  useEffect(() => {
    async function fetchRestaurant(){
      try {
        await restaurantFindersApis
        .get(`/${id}`)
        .then((res) => {
          setSelectedRestaurant(res.data.data.values[0])
        })
      } catch (error) {
        console.log(error);
      }
    } 

    fetchRestaurant()
  },[])

  return (
    <div className='container'>
      <h1 className='font-weight-light display-1 text-center'>{selectedRestaurants? selectedRestaurants.name : 'Loading'}</h1>
      <Reviews />
      <AddReview />
    </div>
  )
}

export default RestaurantDetailPage