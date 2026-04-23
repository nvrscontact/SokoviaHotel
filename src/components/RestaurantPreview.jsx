import React from 'react'
import Article from './subcomponents/Article'

function RestaurantPreview() {
  return (
    <>
          <Article 
          name_article={"Restaurant"} 
          img_article={"/img/restaurant.jpg"}
          paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque tempora eligendi consectetur"}
          />
    </>
  )
}

export default RestaurantPreview