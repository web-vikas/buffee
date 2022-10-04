import React from 'react'
import fof from './assest/images/error-404.png'
import Header from './components/Header/Header'
export default function PageNotFound() {
  return (
    <div className='notFound'>
      <Header/>
      <div className='fof'>
        <img src={fof} alt="404" />
      </div>
    </div>
  )
}
