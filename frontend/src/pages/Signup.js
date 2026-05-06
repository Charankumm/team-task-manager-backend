import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle signup
  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/signup", form);

      console.log("Signup Success:", res.data);
      alert("Signup successful");

      navigate("/"); // go to login
    } catch (err) {
      // 🔥 IMPORTANT: Show real error
      console.log("ERROR RESPONSE:", err.response);
      console.log("ERROR DATA:", err?.response?.data);

      alert(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Signup</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

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
        onClick={handleSignup}
        style={{ width: "100%", padding: "10px" }}
      >
        Signup
      </button>

      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}