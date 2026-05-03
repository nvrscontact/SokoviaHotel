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
            <img src="/icons/lateral_arrow.svg" alt="" />
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
            <img src="/icons/lateral_arrow.svg" alt="" />

          </li>
          <li>
            <Link to="asd">Near Airports</Link>
            <img src="/icons/lateral_arrow.svg" alt="" />

          </li>
          <li>
            <Link to="asd">Support</Link>
            <img src="/icons/lateral_arrow.svg" alt="" />

          </li>
          <li>
            <Link to="asd">Reservations</Link>
            <img src="/icons/lateral_arrow.svg" alt="" />
          </li>
          <li>
            <Link to="/">Home</Link>
            <img src="/icons/lateral_arrow.svg" alt="" />

          </li>
        </ul>
      </div>

    </header>
  )
}

export default Navbar