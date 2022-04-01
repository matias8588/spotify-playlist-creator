import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
/* import HeroImage from "../hero-image"; */
import { StyledLogin } from "./Styled.Login";
/* import imageMusic from "../../assets/music.jpg"; */
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/green.svg";

const Login = () => {
  const { login, getToken }: any = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) {
      getToken(spotifyCode);
      navigate("/create-playlist");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <StyledLogin>
      <div className="wrapper">
        <div>
          <img src={logo} alt="logo" className="img-logo" />
        </div>
        <h3 className="subtitle-login">Register to listen to your favorite music </h3>
        <div>
          <button
            type="button"
            className="button-login"
            onClick={() => {
              login();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
