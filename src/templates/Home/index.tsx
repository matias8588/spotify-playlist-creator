import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "@/components/Hero";
import { useAuth } from "@/context/authContext";
import { StyledHome } from "./Styled.Home";
import { getSong } from "@/utils/getSong";
import Track from "@/components/Track";

const Home = () => {
  const { user, getResultsSearch, resultsSearch }: any = useAuth();
  const navigate = useNavigate();
  const [searchSong, setSearchSong] = useState<string>("");

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
      const response = await getSong(params, user.access_token);
      getResultsSearch(response);
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearch = () => {
    getResultsSearch(null);
    setSearchSong("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
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
        <h2 className="title-home">
          {resultsSearch.length > 0 ? "Create Playlists" : "Search your song"}
        </h2>

        <div className="search">
          <input type="text" value={searchSong} onChange={(e) => setSearchSong(e.target.value)} />
          {resultsSearch.length > 0 ? (
            <button onClick={clearSearch}>Clear</button>
          ) : (
            <button onClick={HandleSearch}>Search</button>
          )}
        </div>
      </div>
      <div className="wrapper-tracks">
        {resultsSearch.length > 0 &&
          resultsSearch[0]?.tracks?.items?.map((track: any, index: number) => (
            <Track key={index} {...track} track={track} />
          ))}
      </div>

      <button onClick={handleLogout}>logout</button>
    </StyledHome>
  );
};

export default Home;
