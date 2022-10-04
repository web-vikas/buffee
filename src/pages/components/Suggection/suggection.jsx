import React from 'react'
import Avatar from '../../assest/images/avatar.jpg'
import './suggection.css'
export default function suggection(props) {
  return (
    <>
        <div className="result-container">
            <div className="image">
                <img src={Avatar} alt="logo" />
            </div>
            <div className="info">
                <h1 className="movie-title">{props.movieName}</h1>
                <p className="language">
                    <strong>Language :</strong> {props.language}
                </p>
                <p className="subtitle">
                <strong>Subtitle :</strong>  {props.subtitle}
                </p>
            </div>
        </div>
    </>
  )
}
