import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
    <footer className='footer'>
      
      <header>

        <img src="/icons/whatsapp.svg" alt="" />
        <img src="/icons/facebookWhite.svg" alt="" />
        <img src="/icons/instagramWhite.svg" alt="" />

      </header>

      <section>
        
        <details>
          <summary>Contact <span>+</span></summary>
          <ul>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Information <span>+</span></summary>
          <ul>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Legal <span>+</span></summary>
          <ul>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Press <span>+</span></summary>
          <ul>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Carreers <span>+</span></summary>
          <ul>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
            <li>
              <Link to="">Uno</Link>
            </li>
          </ul>
        </details>

      </section>

        <p>Valencia, Spain - 03803 <br /><span>C Sokovia's Hotel 2025 - All Rights Reserved</span></p>

    </footer>
      <section>
         <ul>
            <li>
              <Link to="">Cookies Policy</Link>
            </li>
            <li>
              <Link to="">Terms of Use</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
          </ul>
      </section>
      </>
  )
}

export default Footer