import React from 'react'
import './Header.css'

const header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite foodhere</h2>
            <p>Life is not about waiting for the storm to pass. It is about learning to dance in the rain.</p>
            <a href="#explore-menu"><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default header