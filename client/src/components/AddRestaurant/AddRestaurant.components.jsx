import React, { useState } from "react";
import restaurantFindersApis from "../../apis/restaurants/restaurantFinders.apis";
import { useRestaurantContext } from "../../provider/restaurant/restaurant.provider";
import Alerts from "../Alerts/Alerts.components";

const AddRestaurant = () => {
  const { addRestaurants, setAlertTypes, toggleVisible } = useRestaurantContext();
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

  const handleSubmit = (event) => {
    async function createRestaurant() {
      try {
        await restaurantFindersApis.post("/", restaurantBody).then((res) => {
          addRestaurants(res.data.data.values);
          if(res.status===201){
            setRestaurantBody({name:'',location:'',price_range:''})
            setAlertTypes("success", res.data.message);
            toggleVisible(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    createRestaurant();
  };

  return (
    <div className="container text-center">
      <div className="row">
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
        <div className="col ms-auto">
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
