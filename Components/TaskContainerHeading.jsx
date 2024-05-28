import React from "react";
import TaskContainer from "./TaskContainer";

export default function TaskContainerHeading({ Taskadded, onHandleSubmit }) {
  return (
    <>
      <div className="Preority-Based-cont">
        <div className="Preority-Heading">
          <h2>{Taskadded.status}</h2>
        </div>
        {/* <h2>{headStatus}</h2> */}

        <TaskContainer Taskadded={Taskadded} onHandleSubmit={onHandleSubmit} />
      </div>
    </>
  );
}
