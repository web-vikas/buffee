import React from 'react'

export const Downloadbtn = (prpos) => {
  return (
    <h2>
      <a href={prpos.link} target="_blank" download>Download {prpos.res}</a>
    </h2>
  )
}
