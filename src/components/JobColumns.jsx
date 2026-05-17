import React from 'react'
import { ListChecks } from 'lucide-react'
import './JobColumns.css'
import { InJobColumns } from './InJobColumns'

export const JobColumns = (props) => {
  return (
    <section className="columns1">
        <h2 className='hdStatus'>{props.status}</h2>
        {props.imgIcon}
        <InJobColumns />
    </section>
  )
}
