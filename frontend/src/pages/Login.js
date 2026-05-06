import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);

      console.log("LOGIN SUCCESS:", res.data);

      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      navigate("/dashboard");

    } catch (err) {
      // 🔥 IMPORTANT DEBUG LOGS
      console.log("LOGIN ERROR RESPONSE:", err.response);
      console.log("LOGIN ERROR DATA:", err?.response?.data);

      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: "10px" }}
      >
        Login
      </button>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}