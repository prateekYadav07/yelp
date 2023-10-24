import React, { useEffect } from "react";
import { useRestaurantContext } from "../../provider/restaurant/restaurant.provider";
import restaurantFindersApis from "../../apis/restaurants/restaurantFinders.apis";
import Alerts from "../Alerts/Alerts.components";

const RestaurantsTable = () => {
  const { restaurants, setRestaurants, toggleVisible, setAlertTypes } =
    useRestaurantContext();
  const headers = [
    "Restaurant",
    "Location",
    "Price Range",
    "Ratings",
    "Edit",
    "Delete",
  ];

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        await restaurantFindersApis.get("/").then((res) => {
          setRestaurants(res.data.data.values);
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await restaurantFindersApis.delete(`/${id}`);
      setRestaurants(restaurants.filter((item) => item.id !== id));
      setAlertTypes("danger", res.data.message);
      toggleVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list-group mt-2">
      <Alerts />
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            {headers.map((item) => {
              return (
                <th scope="col" key={item}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>{"$".repeat(item.price_range)}</td>
                  <td>-</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsTable;
