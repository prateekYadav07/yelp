import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurantContext } from '../provider/restaurant/restaurant.provider'
import restaurantFindersApis from '../apis/restaurants/restaurantFinders.apis'

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
    <div>{selectedRestaurants? selectedRestaurants.name : 'Loading'}</div>
  )
}

export default RestaurantDetailPage