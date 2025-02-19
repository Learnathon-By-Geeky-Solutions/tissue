import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthStyles.css"; // Reuse the existing styles

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLogin, setIsLogin] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", formData);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://freepng.com/uploads/images/202402/bstract-bus-png-black-white-bus-abstract-design-vector_1020x.jpg"
          alt="Logo"
        />
      </div>
      <div className="text-center mt-4 name">WCT Transport</div>
      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="Location"
            placeholder="Location"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-envelope"></span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn mt-3" type="submit">
          Sign Up
        </button>
      </form>
      <div className="text-center fs-6">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignupForm;
