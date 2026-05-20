import React from 'react'
import "./FormButtons.css"

export const FormButtons = ({value, onClickHandler }) => {
  return (
    <div>
        <button type='button' onClick={()=>onClickHandler(value)} className='btn' >{value}</button>
 
    </div>
  )
}
