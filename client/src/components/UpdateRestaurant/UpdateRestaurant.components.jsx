import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRestaurantContext } from "../../provider/restaurant/restaurant.provider";
import restaurantFindersApis from "../../apis/restaurants/restaurantFinders.apis";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const { addRestaurants, setAlertTypes, toggleVisible } = useRestaurantContext();
  const navigate = useNavigate()
  const [restaurantBody, setRestaurantBody] = useState({
    name: "",
    location: "",
    price_range: "Price Range",
  });
  const { name, location, price_range } = restaurantBody;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurantBody({ ...restaurantBody, [name]: value });
  };

  useEffect(() => {
    async function fetchData(){
        await restaurantFindersApis.get(`/${id}`)
        .then((res) => {
            const obj = res.data.data.values[0]
            const body = {
                name: obj.name,
                location: obj.location,
                price_range: obj.price_range
            }
            setRestaurantBody({...restaurantBody, ...body})
        })
    }

    fetchData()
  }, [id])

  const handleSubmit= () =>  {
    async function updateRestaurant(){
        await restaurantFindersApis.put(`/${id}`, restaurantBody)
        .then((res) => {
            if(res.status===201){
                navigate('/')
                setAlertTypes("success", res.data.message)
                toggleVisible(true)
            }
        })
    }

    updateRestaurant()
  }

  return (
    <div className="container text-center">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder="restaurant name"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            required
            placeholder="restaurant location"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <select
            className="form-select"
            value={price_range}
            name="price_range"
            onChange={handleChange}
            required
            aria-label="Default select example"
          >
            <option defaultValue={1} disabled>
              Price Range
            </option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary text-left"
          >
            Update
          </button> 
        </div>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
