'use client';
import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/utils/storage.ts';
import React, { useState, useEffect } from 'react'

export default function Cookiebanner() {

  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)
    console.log(storedCookieConsent);

    setCookieConsent(storedCookieConsent)
    
  }, [setCookieConsent])

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'
  
    window.gtag("consent", 'update', {
      'analytics_storage': newValue
    });

    const storedValue = getLocalStorage("cookie_consent", null)
    console.log(storedValue, 'sv');
    if(storedValue === true) {
      return;
    } else {    
      setLocalStorage("cookie_consent", cookieConsent)
    }

    //for testing purposes, delete when done
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent])

  function allowCookies() {
    setCookieConsent(true);



  }

  return (
    <>
      
      <div className='cook-banner' style={{'display': `${cookieConsent ? 'none' : 'flex'}`}}>
        <div className='cook-container'>
          <div className='cook-text'>
            <p>The Bamboo Coder uses cookies to gather user data. View the data privacy policy <Link href="/privacy-policy" className='cook-link'>here</Link>.</p>
          </div>
          <div className='cook-button-con'>
            <button className='cook-button' onClick={() => allowCookies()}>
              Allow Cookies
            </button>
            <button className='cook-button' onClick={() => setCookieConsent(false)}>
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
