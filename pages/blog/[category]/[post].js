import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ReactMarkDown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nightOwl} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Comments from '@/components/Comments';
import Head from 'next/head';
import {useRouter} from 'next/router';
import rehypeSlug from 'rehype-slug-custom-id';


let maxArticlesPerPage = 5;
let addOne = 1;
let pages = [1];


export default function PostsPage({frontMatter,content,post}) {
  // frontMatter.tags.forEach(tag => {
  //   console.log(tag);
  // });
  return (
    <>
      {/* <Link href="/blog">
          <button className='backbtn'>
            Go Back
          </button>
      </Link> */}
      <Head>
        <title>
          {frontMatter.title} - The Bamboo Coder
        </title>
      </Head>

      <article className='post-block'>
        <h1 className='post-title'>{frontMatter.title}</h1>
        {/* <div className='about-postInfo'>
          <p className='post-date'>Posted on {frontMatter.date}</p>
          <p className='post-author'> Written By {frontMatter.author}</p>
        </div> */}
              <div className='about-postInfo'>
          <p className='post-date'>Posted on {frontMatter.date} / Written By {frontMatter.author} / Tags: {frontMatter.tags.map((tag,index) => {
            // console.log(tag);
            if(index === frontMatter.tags.length-1) {
              console.log(index, frontMatter.tags.length+1);
              return(
                <>
                  {tag}  
                </>
  
              )
            } else {
              return(
                <>
                  {tag}, 
                </>
              )
            }
          })}</p>
          {/* <p className='post-author'> </p> */}
        </div>
        <img src={frontMatter.image} alt="post Image" width="300" height="250" className='post-thumbnail'/>
        {/* <hr className='hr'/> */}
        {/* <div className='post-content markdown-body' dangerouslySetInnerHTML={{__html: marked.parse(content)}}>
        </div> */}
        <ReactMarkDown className="markdown-body"
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeSlug]}
          components={{
          }}   
        >
          {content}
        </ReactMarkDown>
      </article>
      <Comments post={post} frontMatter={frontMatter} />
    </>
  )
}

export async function getStaticPaths() {
  // const router = useRouter();
  // console.log(router.query);
  const files = fs.readdirSync(path.join('posts'));
  let filelength = files.length;
  // let maxArt = 5;
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

  let urlnum = 0;
  function determineURL() {
    pages.forEach(page => {
      if(window.location.href === page) {
        urlnum = page;
        return urlnum;
      }

    })
  }

  // determineURL()

  const paths = files.map(filename => ({
    params: {
      category: `post`,
      post: `${filename.replace('.md', '')}`
    }
  }))

  // console.log(pages);
  // console.log(paths);

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params: {post} }) {
  // console.log(params.context);
  // console.log(post);
  const markdownContent = fs.readFileSync(path.join('posts', post + '.md'), 'utf-8')
  const {data: frontMatter, content} = matter(markdownContent);


  return{
    props: {
      frontMatter, 
      content, 
      post
    },
    revalidate: 10,
  }
}
