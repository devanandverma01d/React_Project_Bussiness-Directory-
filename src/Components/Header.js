import React from 'react'
import Navigation from './Navigation'

function Header() {
  return (
    <div>
      <header className='main_header'>
        <img className='log_img ms-5' src='https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg'/>
        <Navigation className="navigation_bar me-5" />
      </header>
    </div>
  )
}

export default Header
