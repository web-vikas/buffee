import React from 'react'
import Logo from './logo/Logo'
import Nav from './nav/nav'
import Ham from './Hamburger/Ham'
import './header.css'
import DesktopSeacrh from './search/DesktopSearch'
import { Mobile } from './MobileSearch/Mobile'
export default function Header() {
  return (
    <header className='header flex ai-c jc-sb'>
      <Logo/>
      <Nav/>
      <div className='flex g-2'>
      <DesktopSeacrh/>
      <Mobile></Mobile>
      <Ham/>
      </div>
    </header>
  )
}
