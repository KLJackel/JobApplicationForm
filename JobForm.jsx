import React, { useState} from 'react'
import { FormButtons } from './FormButtons'

function JobForm() {

const [activityformdata, setActivityformdata] =useState(
    {activity: "",
    category: '',
    status: "Running"}
)

/*const callFunctionForm = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setActivityformdata(ini => {
        return{...ini, [name]:value}
    })
}
*/
const callSubmitForm = (e) => {
    e.preventDefault();
}

const selectCategory = ({value}) => {
    setActivityformdata({...activityformdata, category: {value}})
}

const handleJobStatus = (e) => {
    setActivityformdata({...activityformdata, status: e.target.value})
}

/*
const selectCategory = (cat) => {
    if(activityformdata.category.some(item => item===cat)) {
        const filtercategory = activityformdata.category.filter(item => item !== cat)
        setActivityformdata(prev=> {
            return{...prev, category: filtercategory}
        })
    } else {
        setActivityformdata(prev=> {
            return{...prev, category: [...prev.category, cat]}
        })
    }
}
    */
console.log(activityformdata)

  return (
    <div className='form-header'>
        <form>
            <input className='bot-input' type="text" placeholder="Enter job title" onChange={(e) => setActivityformdata({...activityformdata, activity:e.target.value})}></input>
            <div className='form-details'>
                <div className='bottom-line'>
                    <FormButtons value="Read emails" onClickHandler={() =>selectCategory}/>
                    <FormButtons value="Send emails" onClickHandler={() =>selectCategory}/>
                    <FormButtons value="Web Parsing" onClickHandler={() =>selectCategory}/>                    
                </div>
            </div>
            <select className='job-status' onChange={handleJobStatus} >
                    <option value='start'>Start Process</option>
                    <option value='running'>Running</option>
                    <option value='completed'>Completed</option>
                    <option value='stopped'>Stopped</option>
            </select>
            <button type='submit' className='btn submit-data'>Add Job</button>
        </form>    
    </div>
  )
}

export default JobForm