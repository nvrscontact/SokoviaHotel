import React from 'react'
import Article from './subcomponents/Article'

function RestaurantPreview() {
  return (
    <>
      <Article
        name_article={"Restaurant"}
        img_article={"/img/restaurant.jpg"}
        paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque"}
        one_btn_title={"Plates"}
        feature_one={"Seafood"}
        img_feature_one={"/icons/wheelchairGold.svg"}
        feature_two={"Bar"}
        img_feature_two={"/icons/wheelchairGold.svg"}
        feature_three={"Salads"}
        img_feature_three={"/icons/wheelchairGold.svg"}
      />
    </>
  )
}

export default RestaurantPreview