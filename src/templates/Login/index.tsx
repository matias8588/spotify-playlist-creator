import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { login }: any = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      Login
      <button
        type="button"
        onClick={() => {
          login();
          return navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
