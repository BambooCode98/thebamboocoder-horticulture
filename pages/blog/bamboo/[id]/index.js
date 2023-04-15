import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { sortByDate } from '../../../../utils';
import Post from '@/components/Post';
import Head from 'next/head';
import Pagination from '@/components/Pagination';

// import { useRouter } from 'next/router';

// let something = {props}
let array;
let pageCount = [1];
let maxArticlesPerPage = 5;
let addOne = 1;
let pages = [1];
// let bambooposts = [];
// let routeArray = []



export default function Id({posts,pages}) {
  // const router = useRouter();
  // console.log(pages);
  // array = posts.length;
  // console.log(posts);
  // posts.forEach(item => {
  //   // console.log(item.frontmatter);
  //   item.frontmatter.category === 'bamboo' ? bambooposts.push(item.frontmatter) : null;
  // })
  // const idStuff = router.query.id;
  // posts = allPosts.map((post,index) => {
  //   if(post.frontmatter.category === 'bamboo') {
  //     console.log(post);
  //     return post;
  //   }
  // })
  // console.log(posts);
  let bamboo = posts.filter((post) => {
    return post.frontmatter.category === 'bamboo' || post.frontmatter.category === 'all'
  })

  return (
    <>
      <div>
        <Head>
          <title>Bamboo Blog Posts</title>
        </Head>
        <h1 className='blog-title'>Bamboo Articles</h1>
        
        {/* <div className='post-container'> */}
            {/* {posts.map((post, index) => {
              // console.log(post);
              return(
                <Post post={post} key={index}/>
              )
            })} */}
            <Pagination posts={bamboo} pages={pages}/>
        {/* </div> */}

      </div>
    
    
    </>
  )
}

export async function getStaticPaths() {
  // console.log(array,'llllllllllllllllllll');
  const files = fs.readdirSync(path.join('posts'));
  let filenum = files.length;
  // console.log(files.length);
  // console.log(filenum, '<- file count');
  checkPagination(maxArticlesPerPage,filenum)
  
  const paths = pageCount.map(pageNum => ({
    params: {
      id: `${pageNum}`
    }
  }))
  // console.log(maxArticlesPerPage);
  // pageCount = pageCount
  // console.log(pageCount);
  // console.log(paths);

  return {
    paths,
    fallback: false,
  }
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
    const {data: frontmatter} = matter(frontMatter);
    
    return {
      slug,
      frontmatter,
    }
  })
  
  let filelength = files.length;

  function checkpageCount(max,fcount) {
    if(fcount > max) {
      maxArticlesPerPage+=5;
      addOne+=1;
      pages.push(addOne);
      checkpageCount(maxArticlesPerPage,filelength)

    } else if(fcount < max) {
      return
    }
  }
  checkpageCount(maxArticlesPerPage,filelength)

  // console.log(posts);

  return{
    props: {
      posts: posts.sort(sortByDate),
      pages
    }
  }
}

function checkPagination(maxA,files) {
  // if(filenum > maxArticlesPerPage) {
  //   addOne+=1;
  //   maxArticlesPerPage+=5;
  //   pageCount.push(addOne);
  // }
  if(files > maxA) {
    // console.log(addOne);
    addOne+=1;
    maxArticlesPerPage+=5;
    pageCount.push(addOne);
    checkPagination(maxArticlesPerPage,files)
    // console.log('loop');
  } else if(files<maxA) {
    // console.log('loop broken');
    return
  }

}