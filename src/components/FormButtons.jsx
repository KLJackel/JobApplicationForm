import React from 'react'
import "./FormButtons.css"


export const FormButtons = ({value, onClickHandler}) => {

/*const addCSStoButton={
  "Read emails": {backgroundColor: 'red'},
  "Send emails": {backgroundColor: 'red'},
  "Web Parsing": {backgroundColor: 'red'},
  default: {backgroundColor: 'hsla(240, 100% 59% 0.8)'}
}
*/

  return (
    <div>
        <button type='button'
        onClick={()=>onClickHandler(value)} 
        className='btn' 
        >{value}</button>
        
    </div>
  )
}
