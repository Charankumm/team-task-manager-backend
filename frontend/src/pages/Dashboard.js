import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/tasks/dashboard")
      .then((res) => setData(res.data))
      .catch(() =>
        alert("Error loading dashboard")
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center mb-5">

          <h1 className="fw-bold">
            Team Task Manager
          </h1>

          <p className="text-muted">
            Manage your projects and tasks
          </p>

        </div>

        {data ? (
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow border-0 p-4 text-center">

                <h4>Total Tasks</h4>

                <h1>{data.totalTasks}</h1>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0 p-4 text-center">

                <h4>To Do</h4>

                <h1>{data.status.todo}</h1>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0 p-4 text-center">

                <h4>Done</h4>

                <h1>{data.status.done}</h1>

              </div>
            </div>

          </div>
        ) : (
          <div className="text-center">
            <h4>Loading...</h4>
          </div>
        )}

      </div>
    </>
  );
}