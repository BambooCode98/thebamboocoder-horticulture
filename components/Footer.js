import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Footer() {
  const [value,setValue] = useState('');
  let lower = value.toLowerCase();
  // console.log(lower);

  function handleSubmit(e) {
    // e.preventDefault();
    // setValue('')
    
  }


  return (
    <footer className='footer'>
      <p className='f-text'>&#169; 2023 - The Bamboo Coder</p>
      <form>
        <div className='search'>
          <input placeholder='Search' className='searchbar' value={value} onChange={e => {setValue(e.target.value)}}/>
          <Link href={{
            pathname: '/search',
            query: {value},
          }} className='mag-con'>
            <button className='footer-sbutton'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='magGlass'/>
            </button>
          </Link>
        </div>
      </form>
      <div className='footer-signup'>
          <ul className='footer-legalstuff'>
            <li>
              <Link href="/terms-and-conditions" className='footer-li'>Terms & Conditions</Link>
            </li>
            
            <li>
              <Link href="/privacy-policy" className='footer-li2'> Privacy Policy</Link>
            </li>
            
            <li>
              <Link href="/terms-and-conditions#disclaimer" className='footer-li3'>Disclaimer</Link>
            </li>
          </ul>
      </div>
    </footer>
  )
}
