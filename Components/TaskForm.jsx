// TaskForm.js

import React, { useState } from "react";
import "./TaskForm.scss";

const TaskForm = ({ onSubmit, onclose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignees, setAssignees] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, team, assignees, priority });
    setTitle("");
    setDescription("");
    setTeam("");
    setAssignees("");
    setPriority("");
  };
  const handleClose = () => {
    onclose();
  };

  return (
    <div className="task-form">
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit}>
        <button onClick={handleClose}>close</button>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
        />

        <label htmlFor="assignees">Assignees:</label>
        <input
          type="text"
          id="assignees"
          value={assignees}
          onChange={(e) => setAssignees(e.target.value)}
          required
        />

        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
