import React from 'react'


export default function HomePage({posts}) {

  // console.log(posts);
  return (
    <>
      <div>
        {/* <h1>Welcome to The Bamboo Coder!</h1> */}

      </div>
      <div className='home-hero-img'>
        <h3 className='home-title'>Have a problem growing plants, or need guidance starting a garden and making it productive? If so, you've come to the right place. </h3>
        {/* <h4 className='home-title2'>Join me on my journey as I learn about these subjects and help distill these topics to you.</h4> */}
        <h4 className='home-title2'>The Bamboo Coder aims to solve your problems related to growing plants with blog posts covering numerous topics, and offering horticultural consulting services in select areas. 
        <br/>
        <br/>
        Our main goal is to help businesses and homeowners maximize yields from their plants, and to achieve self-sufficiency in the landscape. </h4>
      </div>
      <div className='home-middle-content'>
        <h3 className='home-intro'>Recent Posts</h3>
        <div className='home-i-container'>
          <ul className='home-p'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* <div className='home-featured-posts'>
        <h4 className='home-intro'>Featured Posts</h4>
        <div className='home-i-container'>
          <p className='home-p'>Nothing here at the moment!</p>
        </div>
      </div> */}
      
    </>
  )
}
