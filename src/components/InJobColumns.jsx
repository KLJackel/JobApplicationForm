import React from 'react'
import { FormButtons } from './FormButtons'
import { Trash2 } from 'lucide-react'
import './InJobColumns.css'

export const InJobColumns = ({activity, category, index}) => {
  return (
    <article className='jobStateArt'>
        <p className='textArticle'>{activity}</p>
        <div className="jobBox">
        <div className='jobStatBox'>
            {category.map((cat, index) =>  {
                <FormButtons key={index} value={cat} />
                })}
                
            </div>
           <div className='jobDelete'>
                <Trash2 className='deleteIcon'/>
            </div> 
        </div>
    </article>
  )
}
