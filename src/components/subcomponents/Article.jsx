import React from 'react'

function Article({name_article,img_article,paragraph}) {
  return (
   <div className='articles_hero'>
      
      <h1>{name_article}</h1>
      <img src={img_article} alt="" />
      <p>{paragraph}</p>
    </div>  
  )
}

export default Article