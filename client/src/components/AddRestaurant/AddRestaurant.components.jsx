import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="container text-center">
        <form action="">
            <div className="row">
                <div className="col">
                    <input type="text" placeholder='name' className='form-control' />
                </div>
                <div className="col">
                    <input type="text" placeholder='location' className='form-control' />
                </div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option value disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <div className="col ms-auto">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant