import Footer from '@/components/Footer'
import Header from '@/components/Header'
// import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from 'next/script'
import '@/node_modules/github-markdown-css/github-markdown.css'
import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/node_modules/katex/dist/katex.min.css'
import Cookiebanner from '@/components/Cookiebanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
// const gaid = '';

export default function App({ Component, pageProps }) {

  return (
    <>
    {/* <GoogleAnalytics trackPageViews={true}/> */}
      {/* <GoogleAnalytics gaid={gaid}/>
       */}
      <GoogleAnalytics gaid={'G-BE4X413D4Z'}/>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
      <Cookiebanner/>
    </>

  )
  
}







