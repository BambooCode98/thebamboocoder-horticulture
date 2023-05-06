'use client';
import React, {useEffect} from 'react'
import Script from 'next/script'
import {usePathname, useSearchParams} from 'next/navigation'
import { pageView } from '@/utils/pageView';

export default function GoogleAnalytics({gaid}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(typeof pathname, searchParams);

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageView(gaid,url);
    // console.log(gaid);

  }, [pathname, gaid, searchParams])

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
      async src={`https://www.googletagmanager.com/gtag/js?id=G-BE4X413D4Z`}
      strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML = {{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent','default',{
            'analytics_storage': 'denied'
          })

          gtag('config', 'G-BE4X413D4Z', {
            page_path: window.location.pathname,
          });`,
        }}
      >
        
      </Script>
    </>
  )
}
