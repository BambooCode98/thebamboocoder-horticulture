import { Html, Head, Main, NextScript } from 'next/document'
// import GoogleAnalytics from '@/components/GoogleAnalytics'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>The Bamboo Coder</title>
        <meta name="description" content="Learn about generative art and AI with javascript and Python." />
        <meta name="keywords" content="Generative Art, AI, Deep Learning, Machine Learning, Learn to Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="description" content="The Bamboo Coder aims to be a home for all things bamboo, while offering articles covering topics on forestry, horticulture, and gardening." />
        <meta  name="keywords" content="Bamboo, Forestry, Horticulture,Gardening"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#800080"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="p:domain_verify" content="5b5af64dc9280811de76e23575336003"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
