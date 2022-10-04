import React from 'react'
import Download from './components/Download/Download'
import Header from './components/Header/Header'
import Record from './../Database/record.json'
import { Footer } from './components/Footer/Footer'
export function DownloadFile() {
  let id = window.location.href
  id = id.split('/')
  id = id[id.length - 1]
  const check = Record.find(element => element.id === id)
  return (
    <div>
      <Header />
      <Download 
        movieName ={check.movieTitle}
        poster={check.thumbnail}
        quality={check.Quality}
        language = {check.Language}
        Genres = {check.Genres}
        screenshot = {check.screenShots}
        downloadLink = {check.downloadLinks}
        category = {check.category}
      />
      <Footer />
    </div>
  )
}
