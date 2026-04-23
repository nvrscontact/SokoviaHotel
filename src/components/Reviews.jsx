import React from 'react'
import Review from './subcomponents/Review'

function Reviews() {
  return (
    <>
      <section className="reviews">

        <Review
          names={"Kate"}
          date={"May 2023"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          paragraph={"It's a beautiful hotel with impressive views, with wonderful food, even you can play music without annoing anyone"} />
        <Review
          names={"Jennie"}
          date={"Dec 2025"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          paragraph={"I think that has the best views on the entire city of my hometown, because when i went to the hotel"} />

        <Review
          names={"Ross"}
          date={"Jul 2026"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          paragraph={"Restaurant was the best part of the hotel, it's was delicious"} />

        <Review
          names={"Christian"}
          date={"Feb 2025"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          paragraph={"Has a good customer service for that i felt very comfortable in my bedroom"} />




      </section>


    </>
  )
}

export default Reviews