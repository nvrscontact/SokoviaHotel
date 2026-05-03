import React from 'react'
import { Link } from 'react-router-dom'

function Modal() {
  return (
    <header className='modal_navbar'>

        <ul>
          <li>
            <Link>
              <img src="/icons/facebookWhite.svg" alt="" />
              Hotel
            </Link>
          </li>
          <li>
            <Link>
              <img src="/icons/facebookWhite.svg" alt="" />
              Restaurant
            </Link>
          </li>
          <li>
            <Link>
              <img src="/icons/facebookWhite.svg" alt="" />
              Resort
            </Link>
          </li>
        </ul>
    </header>
  )
}

export default Modal