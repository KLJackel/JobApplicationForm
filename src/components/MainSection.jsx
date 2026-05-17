import React from 'react'
import JobForm from './JobForm'
import { ListCheck } from 'lucide-react'
import { JobColumns } from './JobColumns'
import { FileCheck } from 'lucide-react'
import { FileStack } from 'lucide-react'

function MainSection() {
  return (
    <>
        <p>Details for jobs</p>
        <main className='headerfunc'>
            <JobColumns imgIcon={<ListCheck />} status='Need to Complete' />
            <JobColumns imgIcon={<FileStack />} status='In Progress'/>
            <JobColumns imgIcon={<FileCheck />} status='Completed'/>
        </main>
    </>
)
}

export default MainSection