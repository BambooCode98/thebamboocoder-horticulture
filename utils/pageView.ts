export const pageView = (gaid: string, url: string) => {
  window.gtag("config", gaid, {
    page_path: url,
  })
}


// if(typeof window !== 'undefined') {

// }
