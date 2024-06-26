import { useState } from 'react'
import './Input.css'

function Input({tipo, imgSrc}) {

  return (
    <>
      <div className='inputDiv'>
        <input placeholder={tipo} className='input'/>
        <img src={imgSrc}></img>
      </div>
    </>
  )
}

export default Input
