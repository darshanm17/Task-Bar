import React from 'react'
import './Filter.scss'

export default function Filter() {
  return (
   <>
   <div className='Filter-cont'>
    <h2>
    Filter
   </h2>
    <form >
       <input
       type='text'
       id='filterby'
      className='Assign-filter'
     />
      <select
        id='filter'
    >
             <option value="">None</option>
            <option value="priority">Priority</option>
            <option value="startDate">Start Date</option>
            <option value="endDate">End Date</option>
            </select>
            <input
            type='date'
            />
    </form>
    </div>
   </>
  )
}
