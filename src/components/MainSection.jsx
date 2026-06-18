import React from 'react'
import JobForm from './JobForm'
import { ListCheck } from 'lucide-react'
import { JobColumns } from './JobColumns'
import { FileCheck } from 'lucide-react'
import { FileStack } from 'lucide-react'
import { useState } from 'react'

function MainSection() {
    const [job, setJob] = useState([])
    console.log(job)

  return (
    <>
        <JobForm setJobs={setJob}/>
        <p>Details for jobs</p>
        <main className='headerfunc'>
            <JobColumns imgIcon={<ListCheck />} status='Need to Complete' job={job}/>
            <JobColumns imgIcon={<FileStack />} status='In Progress'job={job}/>
            <JobColumns imgIcon={<FileCheck />} status='Completed'job={job}/>
        </main>
    </>
)
}

export default MainSection