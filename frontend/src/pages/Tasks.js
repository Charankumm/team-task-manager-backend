import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (err) {
      console.log(err);

      alert("Error loading tasks");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (err) {
      console.log(err);

      alert("Error deleting task");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, {
        status,
      });

      fetchTasks();

    } catch (err) {
      console.log(err);

      alert("Error updating status");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="mb-4">
          All Tasks
        </h1>

        <div className="row">

          {tasks.map((task) => (
            <div
              key={task._id}
              className="col-md-4 mb-4"
            >
              <div className="card shadow p-3 h-100">

                <h4>{task.title}</h4>

                <p>{task.description}</p>

                <div className="mb-3">

                  <select
                    className="form-select"
                    value={task.status}
                    onChange={(e) =>
                      updateStatus(
                        task._id,
                        e.target.value
                      )
                    }
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
                  className="btn btn-danger"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete Task
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}