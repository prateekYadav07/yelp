import React, { createContext, useContext, useState } from 'react'

const RestaurantContext = createContext({
    
})

export const useRestaurantContext =() => useContext(RestaurantContext)

const RestaurantContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
  return (
    <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
        {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider