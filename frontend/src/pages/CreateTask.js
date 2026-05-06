import { useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

export default function CreateTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post(
        "/tasks",
        task
      );

      console.log("SUCCESS:", response.data);

      alert("Task created successfully");

      setTask({
        title: "",
        description: "",
        status: "todo",
      });

    } catch (err) {
      console.log("FULL ERROR:", err);

      console.log(
        "ERROR RESPONSE:",
        err.response
      );

      console.log(
        "ERROR DATA:",
        err.response?.data
      );

      alert("Error creating task");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow p-4">

          <h1 className="mb-4">
            Create Task
          </h1>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label">
                Task Title
              </label>

              <input
                type="text"
                name="title"
                className="form-control"
                value={task.title}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Description
              </label>

              <textarea
                name="description"
                className="form-control"
                rows="4"
                value={task.description}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Status
              </label>

              <select
                name="status"
                className="form-select"
                value={task.status}
                onChange={handleChange}
              >
                <option value="todo">
                  To Do
                </option>

                <option value="inProgress">
                  In Progress
                </option>

                <option value="done">
                  Done
                </option>

              </select>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Task
            </button>

          </form>

        </div>
      </div>
    </>
  );
}