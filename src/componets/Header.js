import React from 'react'

export default function Header({title,description}) {
  return (
    <div className='header'>
          <div className='content'>
              <h1 className='title'>{title}</h1>
              <p className='text'>{description}</p>
          </div>
    </div>
  )
}
