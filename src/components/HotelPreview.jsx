import React from 'react'
import Article from './subcomponents/Article'

function HotelPreview() {
  return (
    <>
    <Article 
    name_article={"Hotel"} 
    img_article={"/img/hotel.jpg"}
    paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque"}
    one_btn_title={"Booking"}
    feature_one={"Parking"}
    img_feature_one={"/icons/wheelchairGold.svg"}
    feature_two={"Wifi"}
    img_feature_two={"/icons/wheelchairGold.svg"}
    feature_three={"Wheelchair"}
    img_feature_three={"/icons/wheelchairGold.svg"}
    />
    </>  
  )
}

export default HotelPreview