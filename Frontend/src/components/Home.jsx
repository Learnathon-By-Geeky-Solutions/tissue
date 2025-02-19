import { useState } from "react";
import ModalForm from "./ModalForm";
import "../styles/styles.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(null);

  return (
    <div className="home-container">
      {/* Background Image */}
      <div className={`background ${isLogin !== null ? "blurred" : ""}`}></div>

      {/* Animated Text */}
      <div className="animated-text">
        <span className="text-line">Lets make the wish</span>
        <span className="text-line">come true and journey</span>
        <span className="text-line">a less stressfull</span>
      </div>
      
      {/* BUTTON CONTAINER - Hide when modal is open */}
      <div className={`button-container ${isLogin !== null ? "hidden" : ""}`}>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>

      {/* Modal Form */}
      {isLogin !== null && (
        <ModalForm isLogin={isLogin} onClose={() => setIsLogin(null)} />
      )}
    </div>
  );
};

export default Home;
