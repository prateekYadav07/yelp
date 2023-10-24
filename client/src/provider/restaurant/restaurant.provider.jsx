import React, { createContext, useContext, useState } from 'react'

const RestaurantContext = createContext({
    restaurants : [],
    addRestaurants : () => {}
})

export const useRestaurantContext =() => useContext(RestaurantContext)

const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const addRestaurants = (item) => setRestaurants(item)
  return (
    <RestaurantContext.Provider value={{restaurants, addRestaurants}}>
        {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider