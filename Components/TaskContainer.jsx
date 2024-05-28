import React, { useState } from "react";
import "./TaskContainer.scss";
import Editing from "./Editing";

export default function TaskContainer({ Taskadded, onHandleSubmit }) {
  const { task, id, status } = Taskadded;
  const [isEditing, setisEditing] = useState(false);
  const [Editinginfo, seteditinginfo] = useState({});
  const [Editedstatus, setEditedStatus] = useState(status);
  const [editingid, seteditigid] = useState(0);
  const [editedtask, seteditedtask] = useState(Taskadded);
  const handleisEditing = (task) => {
    setisEditing(!isEditing);
    //console.log(task)

    seteditinginfo(task);
    //console.log(task);
    seteditigid(id);
    //console.log(Editinginfo)
  };
  const handlEditsubmit = (task) => {
    //console.log(Editedstatus);
    setisEditing(false);

    seteditedtask(task);
    console.log(task);
    onHandleSubmit(editedtask);
  };
  //  console.log(id);
  //  console.log(editingid);

  //const {task,id,status}=Taskadded;
  return (
    <>
      {isEditing && Taskadded.id == editingid ? (
        <Editing
          toEdit={Editinginfo}
          onSubmit={handlEditsubmit}
          key={task.id}
        />
      ) : (
        <div className="Task-Container" key={task}>
          <div className="Task-Title-Priority">
            <h2>{task.title}</h2>
            <div className="Preority">{task.priority}</div>
          </div>
          <div className="Task-Description">
            <p>{task.description}</p>
          </div>
          <div className="Assign-Edit">
            <h2>{task.assignees}</h2>
            <div className="Edit-COnt">
              <button
                className="Edit-btn"
                onClick={() => {
                  //console.log(Taskadded)
                  handleisEditing(Taskadded);
                }}
              >
                ...
              </button>
            </div>
          </div>
          <div className="Progress-button">
            {editingid == Taskadded.id ? (
              <button>{Editedstatus}</button>
            ) : (
              <button>{status}</button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
