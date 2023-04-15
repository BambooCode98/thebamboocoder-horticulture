import React, { useState,useRef } from 'react'
import Link from 'next/link'



export default function HomePage({posts}) {
  const [articleNumber, setArticleNumber] = useState('')

  let recentPosts = [];
  posts.forEach(post => {
    recentPosts.push(post);
  })
  if(recentPosts.length > 5) {
    recentPosts.shift();
    recentPosts.reverse();
  }

  function moveRight() {
    scrollTo(450,0)
  }
  // console.log(posts);
  return (
    <>
      <div>
        {/* <h1>Welcome to The Bamboo Coder!</h1> */}

      </div>
      <div className='home-hero-img'>
        <h3 className='home-title'>Have a problem growing plants?</h3>
        <h3 className='home-title3'>
          Need guidance starting a garden and making it productive?
        </h3>
        <h3 className='home-title4'>
          Need help growing bamboo?
        </h3>
        <h3 className='home-title5'>
          If so, you've come to the right place.
        </h3>
        {/* <h4 className='home-title2'>Join me on my journey as I learn about these subjects and help distill these topics to you.</h4> */}
        <h4 className='home-title2'>The Bamboo Coder aims to solve your problems related to growing plants with blog posts covering numerous topics.
        {/* <br/>
        <br/>
        My main goal is to help businesses and homeowners maximize yields from their plants, and to achieve self-sufficiency in the landscape.  */}
          <Link href='/blog' className='homepage-link1'> Click here to view the blog.</Link>
        </h4>
      </div>
      <div className='home-middle-content'>
        <h3 className='home-intro'>Recent Posts</h3>
        <div className='home-i-container'>
          {/* <div></div> */}
          {/* <div className='test1'></div> */}
            <div className='test1 scrollcontainer scrollcontainer--horizontal'>
          <div className='home-p scrollcontainer scrollcontainer--horizontal'>

            {recentPosts.map((post,index) => {
              return(
                <div className="home-post-card" key={index}>
                  <Link href={`/blog/post/${post.slug}`} className='post-link' >
                    <img src={post.frontmatter.image} alt={post.slug}className='home-card-thumb'/>
                    <div className='home-card-info'>
                      <h2 className='home-card-title'>{post.frontmatter.title}</h2>
                      <hr/>
                      <p className='card-date'>Posted on {post.frontmatter.date}</p>
                      <p className='excerpt'>{post.frontmatter.excerpt}</p>
                        {/* <p>Author: {post.frontmatter.author}</p> */}
                      {/* <div className='under-title'>
                      </div> */}
                      {/* <span>Read More...</span> */}
                    </div>
                  </Link>
        
                </div>
              )
              
            })}
          </div>
            </div>
          {/* <div className='test2'></div> */}

          {/* <div className='go-right'>
            <button className='home-right-button' onClick={e=>{moveRight()}}>
              &gt;
            </button>
          </div> */}
        </div>
      </div>
      <div className='home-subscribe'>
        <iframe width="540" height="550" src="https://e88cc980.sibforms.com/serve/MUIEAMTQUjU11MuzKZvYwrE4aB67gNYiQJ8mN_nvsSM0T6ViimoEY9r14-FAusL7JZ4KdAK-HbO1el1LQZqCferautMigj3E3a-drXXUw5n-LuuDTP3ruz0Q1elFt4A8CBIntcIXB7P9w2cJGkQwwIt89IhiDJCaA5WrquYP956hvapa6PmHXb3oPC1hwQQ__eUPrfhAi8OXbVb7" frameBorder="0" scrolling="auto" allowFullScreen style={{display: 'block', marginLeft: "auto",marginRight: "auto", maxWidth: "100%",}} className='iframeStyles'></iframe>
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
