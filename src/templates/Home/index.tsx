import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroImage from "../../components/hero-image";
import { useAuth } from "../../context/authContext";
import { StyledHome } from "./Styled.Home";
import { getSong } from "../../utils/getSong";

const Home = () => {
  const { getToken, user }: any = useAuth();
  const navigate = useNavigate();
  const [searchSong, setSearchSong] = useState<string>("");

  const location = useLocation();
  console.log(user);

  const HandleSearch = async () => {
    try {
      const params = [
        {
          q: searchSong,
        },
        {
          type: "track,artist",
        },
      ];
      const music = await getSong(params, user.access_token);
      console.log(music);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    if (spotifyCode) getToken(spotifyCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <StyledHome>
      <HeroImage
        url={
          "https://enlinea.santotomas.cl/wp-content/uploads/sites/2/2021/03/top-10-los-mejores-sitios-y-aplicaciones-para-conocer-mu%CC%81sica.png"
        }
      >
        <div style={{ height: "400px" }}></div>
      </HeroImage>
      <div className="wrapper-search">
        <h2 className="title-home">Search your song</h2>
        <div className="search">
          <input type="text" value={searchSong} onChange={(e) => setSearchSong(e.target.value)} />
          <button onClick={HandleSearch}>Search</button>
        </div>
      </div>

      <button onClick={handleLogout}>logout</button>
    </StyledHome>
  );
};

export default Home;
