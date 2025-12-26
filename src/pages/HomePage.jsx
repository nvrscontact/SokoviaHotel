import React from 'react'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'

function HomePage() {
  return (
    <>
    
 <Hero></Hero>
    <Reviews/>
    <section className='homePage'>
      
      <section className='information'>
        <h1>Alicante, Alcoy</h1>
        <span>Calle Na Saurina de Entenza 60</span>
        <span>+34 642 00 00 00</span>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24908.640986631737!2d-0.47442855716745597!3d38.70448801725399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61864db38069f7%3A0x612097ca2f0865bd!2sOficina%20de%20Correos!5e0!3m2!1ses!2ses!4v1755183371999!5m2!1ses!2ses" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>   
        <div>
          <h2>Monday - Saturday</h2>
          <span>since 12:00 until 23:00</span>
        </div>
    </section>

    </>
  )
}

export default HomePage