import React, { useState } from 'react'

export default function Editing({toEdit,onEdit,onSubmit}) {
  const{title,priority,description,assignees,team}=toEdit;
  const[editedPreority,seteditedPreority]=useState(toEdit.priority);
  const[editedStatus,setEditedStatus]=useState(toEdit.status);
 //console.log(toEdit.title)
  const handleSubmit=(e)=>{
    e.preventDefault();
    toEdit.status=editedStatus;
    console.log(toEdit.status);

    onSubmit(toEdit);
  }
  //console.log(toEdit);
  console.log(toEdit.status);
 // console.log(editedStatus);
  return (
  <>
   <div className="task-form">
      <h2>Edit The Task</h2>
      <form onSubmit={handleSubmit}>
      <button >close</button>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder={title}
         readOnly
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
        readOnly
          required
        ></textarea>

        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          value={team}
          readOnly
          required
        />

        <label htmlFor="assignees">Assignees:</label>
        <input
          type="text"
          id="assignees"
          value={assignees}
       readOnly
          required
        />
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={editedPreority}
          onChange={(e) => seteditedPreority(e.target.value)}
          required
        >
         <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <label htmlFor="Status">Status:</label>
            <select
            id="Status"
            //value={editedStatus}
            onChange={(e)=>
            setEditedStatus(e.target.value)}
            required
            >
               <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>


            </select>
            <button onClick={handleSubmit}>Save</button>
     </form>
      </div>
      </>
      )
      }
