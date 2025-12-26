import React from 'react'
import Review from './subcomponents/Review'

function Reviews() {
  return (
    <>
      <section className="reviews">

        <Review
          names={"Jennie Salt"}
          date={"May 2025"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          area={"Restaurant"}
          paragraph={"Bueno vamos a ver que podemos comentar de este majestuoso restaurante de lujo 5 estrellas"} />

        <Review
          names={"Jennie Salt"}
          date={"May 2025"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          area={"Hotel"}
          paragraph={" restaurante de lujo 5 estrellas"} />

        <Review
          names={"Jennie Salt"}
          date={"May 2025"}
          star1={"/icons/starFill.svg"}
          star2={"/icons/starFill.svg"}
          star3={"/icons/starFill.svg"}
          star4={"/icons/starFill.svg"}
          star5={"/icons/starOut.svg"}
          area={"Resort"}
          paragraph={"Bueno vamos a ver que podemos comentar de este majestuoso restaurante de lujo 5 estrellas"} />
      </section>
    </>
  )
}

export default Reviews