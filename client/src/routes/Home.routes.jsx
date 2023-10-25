import React from 'react'
import Header from '../components/Header/Header.components'
import AddRestaurant from '../components/AddRestaurant/AddRestaurant.components'
import RestaurantsTable from '../components/RestaurantsTable/RestaurantsTable.components'
// import Alerts from '../components/Alerts/Alerts.components'

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <AddRestaurant />
      <RestaurantsTable />
    </div>
  )
}

export default Home