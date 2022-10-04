import React from 'react'
import {search as MobileSearch} from './components/Search/search'
import Suggection from './components/Suggection/suggection'

import './search.css'
export default function Search() {
  return (
    <div className='search'>
    <MobileSearch/>
    <div className='suggesation-container'>
      <Suggection
      movieName="Avatar (2008)"
      language="Hindi,English,Tamil,Telagu"
      subtitle="English"
      />
    </div>
    </div>
  )
}
