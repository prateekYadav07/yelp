import React from 'react'

const RestaurantsTable = () => {
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