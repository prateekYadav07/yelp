import React, { createContext, useContext, useState } from "react";

const RestaurantContext = createContext({
  restaurants: [],
  addRestaurants: () => {},
  visible: false,
  alert:{},
  toggleVisible: () => {},
  setAlertTypes: () => {},
});

export const useRestaurantContext = () => useContext(RestaurantContext);

const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const setAlertTypes = (type, message) =>
    setAlert({ type: type, message: message });
  const toggleVisible = (val) => setVisible(val);
  const addRestaurants = (item) => setRestaurants([...restaurants, ...item]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        visible,
        toggleVisible,
        setAlertTypes,
        alert
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
