import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <>
    <main className='hero'>

        <video src="/img/hotelVideo.mp4" autoPlay loop/>

        <header>
            <h1>Sokovia's Hotel</h1>
            <span>Benidorm, Alicante</span>
            <section>
                <div>
                    <img src="/icons/starFill.svg" alt="" />
                    <img src="/icons/starFill.svg" alt="" />
                    <img src="/icons/starFill.svg" alt="" />
                    <img src="/icons/starFill.svg" alt="" />
                    <img src="/icons/starFill.svg" alt="" />
                </div>
                <span>4,6 / 5</span>
            </section>
        </header>



        <footer>
            <ul>
                <li>
                    <Link to="">Hotel <img src="/icons/arrowUpRight.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to="">Resort <img src="/icons/arrowUpRight.svg" alt="" /></Link>
                </li>
                <li>
                    <Link to="">Restaurant <img src="/icons/arrowUpRight.svg" alt="" /></Link>
                </li>
            </ul>
        </footer>
    <aside>
       <span>December month is there a 10% discount in Bar</span>
    </aside>
    </main>
    </>
  )
}

export default Hero