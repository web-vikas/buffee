import React from 'react'
import Devider from './components/Devider/devider'
import Header from './components/Header/Header'
import Card from './components/Cards/card'
import './Home.css'
import { Footer } from './components/Footer/Footer'
import Record from '../Database/record.json'
export default function Home() {
  const newArray = Record.filter( (mov)=> {
    return (
        mov.releasestatus === "comingsoon"
    )
  })
  const movieArray = Record.filter( (mov)=> {
    return (
        mov.releasestatus === "released"
    )
  })
  return (
    <>
      <Header />
      <Devider
        title="Popular Movies"
      />
      <div className='HorigentalSLider'>
        <div className='slider'>
          {
            movieArray.slice(0,5).reverse().map(record => {
              return (
                <Card
                  key={record.id}
                  title={record.movieTitle}
                  unicqueVal={record.id}
                  backGround={record.thumbnail}
                />
              )
            })
          }
        </div>
      </div>
      <Devider
        title="Just Arrived"
      />
      <div className='jus-arrived'>
        {
          movieArray.slice(5, 10).map(record => {
            return (
              <Card
                key={record.id}
                title={record.movieTitle}
                unicqueVal={record.id}
                backGround={record.thumbnail}
              />
            )
          })
        }
      </div>
      <Devider
        title="Upcoming Movies"
      />
      <div className='jus-arrived'>
        {
           newArray.slice(0, 10).map(record => {
            return (
              <Card
                key={record.id}
                title={record.movieTitle}
                unicqueVal={record.id}
                backGround={record.thumbnail}
              />
            )
          })
        }
      </div>
      <Footer />
    </>
  )
} 
