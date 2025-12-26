import React from 'react'

function Review({names,star1,star2,star3,star4,star5,date,paragraph,area}) {
  return (
    <>
      <section className='review'>
        
        <header>
          <div>
              <h1>{names}</h1>
              <section>
                  <img src={star1} alt="" />
                  <img src={star2} alt="" />
                  <img src={star3} alt="" />
                  <img src={star4} alt="" />
                  <img src={star5} alt="" />
              </section>

          </div>
            <span>{date} • {area}</span>
        </header>
            

        <p>{paragraph}</p>
      </section>  
    </>
  )
}

export default Review 