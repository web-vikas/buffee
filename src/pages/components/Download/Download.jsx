import React from 'react'
import './download.css'
import { Downloadbtn } from './../DowbloadBtn/Downloadbtn'
export default function Download(prpos) {
    return (
        <div>
            <div className="downlaod-container">
                <div className="srf">
                    <h2 className='movie-title'>" {prpos.movieName} "</h2>
                </div>
                <div className="ig">
                    <img src={'http://drive.google.com/uc?export=view&id='+ prpos.poster} alt="movie-poster" />
                </div>
                <ul className="details">
                    <li><strong>Movie Name :</strong> {prpos.movieName}</li>
                    <li><strong>Quality :</strong>{prpos.quality}</li>
                    <li><strong>Launguage :</strong> {prpos.language}</li>
                    <li><strong>Genres :</strong> {prpos.Genres}</li>
                    <li><strong>Category :</strong> {prpos.category}</li>
                </ul>
                <div className="screeshots">
                    <div className="column">
                        <img src= {'http://drive.google.com/uc?export=view&id='+ prpos.screenshot} alt="screenshots" />
                    </div>
                </div>
                <div className="dwd-lc">
                    <div className="dl-row">
                        {
                            prpos.downloadLink.map(link => {
                                let key = link
                                let res = link.substring(0, 5)
                                link = link.substring(5)
                                key = key.split('/')
                                key = key[key.length - 1]
                                return (
                                    <Downloadbtn
                                        key= {key}
                                        link={link}
                                        res = {res}
                                    />
                                )
                            })
                        }
                        {/* <h2>720p </h2><a href={link}>Download</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
