import React from 'react'
import Article from './subcomponents/Article'

function ResortPreview() {
  return (
    <>
      <Article
        name_article={"Resort"}
        img_article={"/img/resort.jpg"}
        paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque"}
        one_btn_title={"Booking"}
        two_btn_title={"More Info"}
        feature_one={"Parking"}
        img_feature_one={"/icons/wheelchairGold.svg"}
        feature_two={"Landscapes"}
        img_feature_two={"/icons/wheelchairGold.svg"}
        feature_three={"Wheelchair"}
        img_feature_three={"/icons/wheelchairGold.svg"}

      />
    </>
  )
}

export default ResortPreview