import React from 'react'
import Article from './subcomponents/Article'

function HotelPreview() {
  return (
    <>
    <Article 
    name_article={"Hotel"} 
    img_article={"/img/hotel.jpg"}
    paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque tempora eligendi consectetur"}
    />
    </>  
  )
}

export default HotelPreview