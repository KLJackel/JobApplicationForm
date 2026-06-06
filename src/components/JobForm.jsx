import React, { useState} from 'react'
import { FormButtons } from './FormButtons'

function JobForm() {

const [activityformdata, setActivityformdata] =useState(
    {activity: "",
    category: '',
    status: "Need to Complete"}
)
const [jobs, setJobs] = useState([])
const [activeBtn, setActiveBtn] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activityformdata)
    setJobs(prev => {
        return [...prev, activityformdata]
    })
}

/* need to add a operator to change the background color dependent on whether the button has been clicked or not*/


const selectCategory = (value) => {
    setActivityformdata({...activityformdata, category: value})
    setActiveBtn(true)
}

const handleJobStatus = (e) => {
    setActivityformdata({...activityformdata, status: e.target.value})
}


console.log(activityformdata)
/*console.log(activeBtn)*/

  return (
    <div className='form-header'>
        <form>
            <input className='bot-input' type="text" placeholder="Enter job title" onChange={(e) => setActivityformdata({...activityformdata, activity:e.target.value})}></input>
            <div className='form-details'>
                <div className='bottom-line'>
                    <FormButtons value="Read emails" onClickHandler={() => selectCategory("Read emails")} />
                    <FormButtons value="Send emails" onClickHandler={() =>selectCategory("Send emails")} />
                    <FormButtons value="Web Parsing" onClickHandler={() =>selectCategory("Web Parsing")} />                    
                </div>
            </div>
            <select className='job-status' onChange={handleJobStatus} >
                    <option value='Need to Complete'>Need to Complete</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Complete'>Complete</option>
            </select>
            <button type="submit" className='btn submit-data' >Add Job</button>
        </form>    
    </div>
  )
}

export default JobForm