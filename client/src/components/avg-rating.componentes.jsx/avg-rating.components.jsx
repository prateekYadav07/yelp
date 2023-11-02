
import React from 'react'
import StarRating from '../star-rating/star-rating.components'
import { useRestaurantContext } from '../../provider/restaurant/restaurant.provider'

const AvgRating = ({totalRatings, avgRatings}) => {
  return (
    <div>
      <StarRating rating={(avgRatings)}/>
      <span>{totalRatings ? `(${totalRatings})` : avgRatings}</span>
    </div>
  )
}

export default AvgRating