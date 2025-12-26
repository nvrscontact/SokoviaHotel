import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='navbar'>
      
      <input type="checkbox" id='casilla' />
      <label htmlFor="casilla"> <img src="/icons/menu.svg" alt="" /> </label>

      <div className="submenu">
        <ul>
          <li>
            <Link to="/restaurant">Hotel & Resort</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
          </li>
          <li>
            <Link to="asd">Near Airports</Link>
          </li>
           <li>
            <Link to="asd">Help</Link>
          </li>
           <li>
            <Link to="asd">Reservations</Link>
          </li>
          <li>
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </div>
    
    </header>
  )
}

export default Navbar