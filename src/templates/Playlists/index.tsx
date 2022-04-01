import React from "react";
import ListSongs from "@/components/ListSong";
import { useAuth } from "@/context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { StyledPlaylists } from "./Styled.Playlists";

const Playlists = () => {
  const { playlists }: any = useAuth();
  const { title } = useParams();
  const navigate = useNavigate();
  const newPlaylist = playlists.filter((item: any) => item.titlePlaylists === title);

  return (
    <StyledPlaylists>
      <div className="wrapper-title">
        <h2>{title}</h2>
        <button onClick={() => navigate("/home")}>BACK</button>
      </div>

      <div className="wrapper-list-songs">
        {newPlaylist &&
          newPlaylist?.map((track: any, index: number) => {
            return (
              <ListSongs
                key={index}
                imgUrl={track?.imgUrl}
                id={track?.id}
                releaseDate={track?.releaseDate}
                title={track?.title}
                externalUrl={track?.externalUrl}
                artist={track?.artist}
                titleList={title}
              />
            );
          })}
      </div>
    </StyledPlaylists>
  );
};

export default Playlists;
