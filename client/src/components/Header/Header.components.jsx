import React from 'react'

const Header = ({children}) => {
  return (
    <div>
        <h1 className='font-weight-light display-1 text-center'>Restaurant Finder</h1>
        <div>
          {children}
        </div>
    </div>
  )
}

export default Header