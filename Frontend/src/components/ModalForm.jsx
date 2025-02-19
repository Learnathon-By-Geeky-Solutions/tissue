import { motion } from "framer-motion";
import LoginGorm from "./Auth/LoginForm"
import SignupForm from "./Auth/SignupForm";

const ModalForm = ({ isLogin, onClose }) => {
  return (
    <motion.div 
      className="modal-form"
      initial={{ y: "100%" }} 
      animate={{ y: 0 }} 
      exit={{ y: "100%" }} 
      transition={{ type: "spring", stiffness: 100 }}
    >
      <button className="close-btn" onClick={onClose}>×</button>
      {isLogin ? <LoginGorm /> : <SignupForm />}
    </motion.div>
  );
};

export default ModalForm;
