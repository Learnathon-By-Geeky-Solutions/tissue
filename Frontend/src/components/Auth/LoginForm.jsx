import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthStyles.css"; // Import the styles separately

const LoginForm = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [isLogin, setIsLogin] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
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
            name="userName"
            id="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
