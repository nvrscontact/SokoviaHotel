import React from 'react'
import { Link } from 'react-router-dom';
// {variable ? (ejecucion) : null } poder comprobar si existe o no y mostrarla dependiendo si existe o no.
function Article({
  name_article,
  img_article,
  paragraph,
  one_btn_title,
  two_btn_title,
  img_feature_one,
  feature_one,
  img_feature_two,
  feature_two,
  img_feature_three,
  feature_three }) {
  return (
    <div className='articles_hero'>

      <h1>{name_article}</h1>
      <section className='features'>
        {img_feature_one && feature_one ? (
          <div>
            <img src={img_feature_one} alt="" />
            <span>{feature_one}</span>
          </div>
        ) : null}
        {img_feature_two && feature_two ? (
          <div>
            <img src={img_feature_two} alt="" />
            <span>{feature_two}</span>
          </div>
        ) : null}
        {img_feature_three && feature_three ? (
          <div>
            <img src={img_feature_three} alt="" />
            <span>{feature_three}</span>
          </div>
        ) : null}
      </section>

      <section className='img_container'>
        <img src={img_article} alt="" />
        <p>{paragraph}</p>
      </section>
      <section className='buttons'>
        {one_btn_title ? (
          <button>
            <Link to="/Hotel">{one_btn_title}</Link>
          </button>
        ) : null}
        {two_btn_title ? (
          <button>
            <Link to="/Hotel">{two_btn_title}</Link>
          </button>
        ) : null}
      </section>
    </div>
  )
}

export default Article