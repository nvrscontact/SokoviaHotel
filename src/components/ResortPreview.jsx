import React from 'react'
import Article from './subcomponents/Article'

function ResortPreview() {
  return (
    <>
          <Article 
          name_article={"Resort"} 
          img_article={"/img/resort.jpg"}
          paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, delectus odit eaque tempora eligendi consectetur"}
          />
    </>
  )
}

export default ResortPreview