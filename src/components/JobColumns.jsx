import React from 'react'
import { ListChecks } from 'lucide-react'
import './JobColumns.css'
import { InJobColumns } from './InJobColumns'

export const JobColumns = ({status, job, imgIcon}) => {

  /* need to map the job into the inJobColumns*/
  return (
    <section className="columns1">
        <h2 className='hdStatus'>{status}</h2>
        {imgIcon}
        {job.map((jo, index) => jo.status===status && 
          (<InJobColumns
            key={index}
            activity={jo.activity}
            category={jo.category} />))

        }
    </section>
  )
}
