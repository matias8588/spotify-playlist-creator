import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import { StyledHome } from "./Styled.Home";
import { getSong } from "@/utils/getSong";
import Track from "@/components/Track";
import arrowGo from "@/assets/arrow.svg";
import logout from "@/assets/logout.svg";
import CreatePlaylist from "@/components/CreatePlaylist";
import close from "@/assets/close.svg";

const Home = () => {
  const { user, getResultsSearch, resultsSearch, playlists, titlePlaylist, deletePlaylist }: any =
    useAuth();
  const navigate = useNavigate();
  const [searchSong, setSearchSong] = useState<string>("");

  const titleResult = new Set(playlists.map((item: any) => item.titlePlaylists)) || [];

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
  if (playlists?.length === 0 && !titlePlaylist) {
    return <CreatePlaylist />;
  }

  return (
    <StyledHome>
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
        {Array.from(titleResult)?.length > 0 && (
          <div>
            <div className="wrapper-title">
              <h2>Your Playlists</h2>
              <button onClick={() => navigate("/create-playlist")}>Create New playlist</button>
            </div>

            <div className="wrapper-titles-playlist">
              {Array.from(titleResult)?.map((item: any, index: number) => (
                <div key={index} className="button-playlist">
                  <button className="button-close" onClick={() => deletePlaylist(item)}>
                    <img src={close} alt="close" />
                  </button>
                  <button
                    className="button-go-playlist"
                    onClick={() => navigate(`/playlists/${item}`)}
                  >
                    {item} <img src={arrowGo} alt="arrow go" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="dashboard">
        <div className="wrapper-tracks">
          {resultsSearch.length > 0 &&
            resultsSearch[0]?.tracks?.items?.map((track: any, index: number) => (
              <Track key={index} {...track} track={track} titlePlaylist={titlePlaylist} />
            ))}
        </div>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>
          <img src={logout} alt="logout" />
        </button>
      </div>
    </StyledHome>
  );
};

export default Home;
