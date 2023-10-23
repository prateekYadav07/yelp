import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from './routes/Home.routes'
import UpdatePage from './routes/UpdatePage.routes'
import RestaurantDetailPage from './routes/RestaurantDetailPage.routes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/restaurants/:id/update',
        element: <UpdatePage />
    },
    {
        path: '/restaurants/:id',
        element: <RestaurantDetailPage />
    }
])

const App = () => {
    return(
        <div>
        </div>
    )
}

export default App;