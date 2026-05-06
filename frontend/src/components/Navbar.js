import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/dashboard"
        >
          Team Task Manager
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link"
            to="/tasks"
          >
            Tasks
          </Link>

          <Link
            className="nav-link"
            to="/create-task"
          >
            Create Task
          </Link>

          <button
            className="btn btn-danger ms-3"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}