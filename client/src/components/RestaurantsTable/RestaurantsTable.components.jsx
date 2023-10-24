import React, { useEffect } from 'react'
import { useRestaurantContext } from '../../provider/restaurant/restaurant.provider'
import restaurantFindersApis from '../../apis/restaurants/restaurantFinders.apis'

const RestaurantsTable = () => {
    const {restaurants, addRestaurants} = useRestaurantContext()
    useEffect(() => {
        async function fetchRestaurants(){
            try {
                await restaurantFindersApis
                .get("/")
                .then((res) => {
                    addRestaurants(res.data.data.values)
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchRestaurants()
    }, [])

  return (
    <div className="list-group mt-2">
        <table className="table table-hover">
            <thead>
                <tr className='table-dark'>
                    <th scope='col'>Restaurant</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Ratings</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mcdonalds</td>
                    <td>New York</td>
                    <td>$</td>
                    <td></td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantsTable