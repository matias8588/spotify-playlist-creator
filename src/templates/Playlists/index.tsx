import React from "react";
import { useNavigate } from "react-router-dom";
import ListSongs from "@/components/ListSong";
import { useAuth } from "@/context/authContext";

const Playlists = () => {
  const { playlists }: any = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>{playlists[0]?.titlePlaylist}</h1>
        <button onClick={() => navigate("/home")}>BACK</button>
      </div>

      <div>
        {playlists &&
          playlists?.map((track: any, index: number) => {
            return (
              <ListSongs
                key={index}
                imgUrl={track?.imgUrl}
                id={track?.id}
                releaseDate={track?.releaseDate}
                title={track?.title}
                externalUrl={track?.externalUrl}
                artist={track?.artist}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Playlists;
