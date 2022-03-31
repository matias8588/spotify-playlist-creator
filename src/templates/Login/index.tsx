import React, { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import HeroImage from "@/components/Hero";
import { StyledLogin } from "./Styled.Login";
import imageMusic from "@/assets/music.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, getToken }: any = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) {
      getToken(spotifyCode);
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

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
            return navigate("/home");
          }}
        >
          Login
        </button>
      </HeroImage>
    </StyledLogin>
  );
};

export default Login;
