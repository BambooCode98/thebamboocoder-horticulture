import { useRouter } from 'next/router'
import React from 'react'
import { sortByDate } from '@/utils';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from '@/components/Post';

export default function Search({posts}) {
  const router = useRouter();
  const searchQuery = router.query;

  
  let results = [];
  function search() {
    console.log(searchQuery.value);
    posts.map((post,index) => {
      if(post.frontmatter.excerpt.includes(searchQuery.value) || post.frontmatter.title.includes(searchQuery.value) || post.frontmatter.date.includes(searchQuery.value) || post.content.includes(searchQuery.value)) {
        results.push(post);
      }
    })

  }

  search()
  // console.log(results);

  return (
    <>
      {results.length !== 0 ? 
        <>
          <h1 className='blog-title'>Search Results - {results.length}</h1>
          <div className='post-container'>
            {results.map((post,index) => {
              return(
                <div key={index}>
                  <Post post={post}/>
                </div>
              )
            })}
          </div>
        </> :
        <>
          <h1 className='blog-title'>
            Search Results - {results.length}
          </h1>
          <div className='post-container2'>
            <p>No Articles Found.</p>
          </div>
        </>
      
    
      }
    
    
    
    </>
  )
}







export async function getStaticProps() {
  //get files from posts folder
  const files = fs.readdirSync(path.join('posts'));

  //get slug and front matter from posts

  const posts = files.map(file => {
    //create slug first
    const slug = file.replace('.md', '');

    //get front matter
    const frontMatter = fs.readFileSync(path.join('posts', file), 'utf-8')
    const {data: frontmatter, content} = matter(frontMatter);

    return {
      slug,
      frontmatter,
      content
    }
  })

  return{
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}