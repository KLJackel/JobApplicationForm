import React from 'react'
import { FormButtons } from './FormButtons'
import { Trash2 } from 'lucide-react'
import './InJobColumns.css'

export const InJobColumns = () => {
  return (
    <article className='jobStateArt'>
        <p className='textArticle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iusto recusandae, dolor quia quae earum tenetur nesciunt veniam pariatur! Possimus rem nam blanditiis fuga corporis voluptatibus ut veniam voluptatem voluptates.</p>
        <div className="jobBox">
            <div className='jobStatBox'>
                <FormButtons value='Parse Emails' />
                <FormButtons value='SAP Extraction' />
            </div>
           <div className='jobDelete'>
                <Trash2 className='deleteIcon'/>
            </div> 
        </div>
    </article>
  )
}
