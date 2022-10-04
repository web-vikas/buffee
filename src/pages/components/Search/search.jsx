import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
export const search = () => {
  return (
    <>
      <div className="search-container">
          <Link to="/">
        <button>
            <i className="fa-solid fa-caret-left"></i>
        </button>
          </Link>
        <input type="text" placeholder="Search.." />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  )
}
