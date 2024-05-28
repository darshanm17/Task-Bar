import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskForm from "./Components/TaskForm";
import TaskContainer from "./Components/TaskContainer";
import "./App.css";
import Filter from "./Components/Filter";
import TaskContainerHeading from "./Components/TaskContainerHeading";

function App() {
  const [newTaskclicked, setNewTaskclicked] = useState(false);
  const [presentTask, setPresentTask] = useState([]);
  const [Taskid, setTaskid] = useState(presentTask.length + 1);
  const [Taskstatus, setTaskstatus] = useState("Pending");
  const [Pending, setPending] = useState([]);
  const [InProgress, setInprogress] = useState([]);
  const [Completed, setCompleted] = useState([]);
  const [Deployed, setDeployed] = useState([]);
  const [Defferd, setDeffered] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  //const[headStatus,setHeadStatus]=useState(Status);
  const handleClickevent = () => {
    setNewTaskclicked(!newTaskclicked);
  };
  const handleSubmit = (task) => {
    //console.log(task.status);
    const newtask = [...presentTask, { task, id: Taskid, status: Taskstatus }];
    //console.log(newtask.id);
    console.log(newtask);
    setPresentTask(newtask);
    setNewTaskclicked(false);
    setTaskid(Taskid + 1);
    //console.log("new task:",task);
  };
  //console.log(presentTask);
  const handleCloseform = () => {
    setNewTaskclicked(false);
  };
  const handleneweditedTask = (task) => {
    //console.log(task);
    presentTask.forEach((t, idx) => {
      console.log(idx);
      t.id == task.id ? (presentTask[idx] = task) : null;
    });

    console.log(presentTask);
  };

  const handleDeletePendingTask = (task) => {
    //console.log(task.id);
    const newpendinglist = presentTask.filter((item) => item.id != task.id);
    setPresentTask(newpendinglist);
  };
  const sorttask = (tasks) => {
    // console.log(tasks);
    if (sortBy === "priority") {
      return [...tasks].sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortBy === "startDate") {
      return [...tasks].sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );
    } else if (sortBy === "endDate") {
      return [...tasks].sort(
        (a, b) => new Date(a.endDate) - new Date(b.endDate)
      );
    } else {
      return tasks;
    }
  };

  //console.log(sorttask);
  //  presentTask.map((task)=>{
  //   task.status=='Pending'?handlePending(task):
  //   task.status=='In Progress'?handleInprogress(task):
  //   task.status=='Completed'?handleCompleted(task):
  //   task.status=='Deployed'?handleDeployed(task):
  //   task.status=='Deferred'?handleDefferd(task):null;
  //  })
  //  const handlePending=(task)=>{
  // const newlist=[...Pending,task];
  // setPending(newlist);

  //  }
  //  const handleInprogress=(task)=>{
  //   const newlist=[...InProgress,task];
  //   setInprogress(newlist);

  //    }
  //    const handleCompleted=(task)=>{
  //     const newlist=[...Completed,task];
  //     setCompleted(newlist);
  //      }
  //      const handleDeployed=(task)=>{
  //       const newlist=[...Deployed,task];
  //       setDeployed(newlist);
  //       }
  //       const handleDefferd=(task)=>{
  //         const newlist=[...Defferd,task];
  //         setDeffered(newlist);
  //       }

  //console.log(editedtask);
  return (
    <>
      <div className={!newTaskclicked?"Taskbar":"DisableTask"}>
        <div className="Header">
          <Filter />
{!newTaskclicked?
          <button onClick={handleClickevent} className="Create-new-Button">
            Create a New Task
          </button>:null}
        </div>

        {newTaskclicked && (
          <TaskForm onSubmit={handleSubmit} onclose={handleCloseform} />
        )}
        <div className="taskbar-cont">
          <div className="Preority-Based-cont">
            <div className="Preority-Heading Pending">
              <h2>Pending</h2>
            </div>

            {sorttask(
              presentTask.filter((task) => task.status == "Pending")
            ).map((task) => {
              return (
                <>
                  <TaskContainer
                    Taskadded={task}
                    onHandleSubmit={handleneweditedTask}
                  />
                </>
              );
            })}
          </div>
          <div className="Preority-Based-cont">
            <div className="Preority-Heading In-Progress">
              <h2>In Progress</h2>
            </div>

            {sorttask(
              presentTask.filter((task) => task.status == "In Progress")
            ).map((task) => {
              return (
                <TaskContainer
                  Taskadded={task}
                  onHandleSubmit={handleneweditedTask}
                />
              );
            })}
          </div>
          <div className="Preority-Based-cont">
            <div className="Preority-Heading Completed">
              <h2>Completed</h2>
            </div>

            {sorttask(
              presentTask.filter((task) => task.status == "Completed")
            ).map((task) => {
              return (
                <TaskContainer
                  Taskadded={task}
                  onHandleSubmit={handleneweditedTask}
                />
              );
            })}
          </div>
          <div className="Preority-Based-cont">
            <div className="Preority-Heading Deployed">
              <h2>Deployed</h2>
            </div>

            {sorttask(
              presentTask.filter((task) => task.status == "Deployed")
            ).map((task) => {
              return (
                <TaskContainer
                  Taskadded={task}
                  onHandleSubmit={handleneweditedTask}
                />
              );
            })}
          </div>
          <div className="Preority-Based-cont">
            <div className="Preority-Heading Deferred">
              <h2>Deferred</h2>
            </div>

            {sorttask(
              presentTask.filter((task) => task.status == "Deferred")
            ).map((task) => {
              return (
                <TaskContainer
                  Taskadded={task}
                  onHandleSubmit={handleneweditedTask}
                />
              );
            })}
          </div>

          {/* {task.status=='Pending'?
            
            <TaskContainerHeading Taskadded={task} onHandleSubmit={handleneweditedTask}/>
                :task.status=='In Progress'?
              <TaskContainerHeading Taskadded={task} onHandleSubmit={handleneweditedTask}/>:
              task.status=='Completed'?
              <TaskContainerHeading Taskadded={task} onHandleSubmit={handleneweditedTask}/>:
              task.status=='Deployed'?
              <TaskContainerHeading Taskadded={task} onHandleSubmit={handleneweditedTask}/>:
              task.status=='Deferred'?
              <TaskContainerHeading Taskadded={task} onHandleSubmit={handleneweditedTask}/>:null
            } */}

          {}
          {}
        </div>
      </div>
    </>
  );
}

export default App;
