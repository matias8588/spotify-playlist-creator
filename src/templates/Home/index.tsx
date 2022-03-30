import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const Home = () => {
  const { getToken, user }: any = useAuth();

  const location = useLocation();

  console.log({ user });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) getToken(spotifyCode);
    // Disabling this rule since getToken is not needed in this case
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return <div>Home</div>;
};

export default Home;
