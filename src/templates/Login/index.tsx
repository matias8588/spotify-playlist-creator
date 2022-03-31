import React from "react";
import { useAuth } from "@/context/authContext";
import HeroImage from "@/components/Hero";
import { StyledLogin } from "./Styled.Login";
import imageMusic from "../../assets/music.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login }: any = useAuth();
  const navigate = useNavigate();

  return (
    <StyledLogin>
      <HeroImage url={imageMusic}>
        <h2 className="title-login">Welcome to Spotify</h2>
        <h3 className="subtitle-login">register to listen to your favorite music </h3>

        <button
          type="button"
          className="button-login"
          onClick={() => {
            login();
            return navigate("/");
          }}
        >
          Login
        </button>
      </HeroImage>
    </StyledLogin>
  );
};

export default Login;
