import React from "react";
import { StyledSongList } from "./Styled.SongList";
import { useAuth } from "../../context/authContext";

interface ISongListProps {
  imgUrl?: string;
  id?: string;
  externalUrl?: string;
  releaseDate?: string;
  title?: string;
  artist?: string;
}

const SongList = ({ imgUrl, id, externalUrl, releaseDate, title, artist }: ISongListProps) => {
  const { createPlaylists }: any = useAuth();

  const handleSpotify = () => window.open(externalUrl, "_blank");

  const handlePlaylists = () =>
    createPlaylists([imgUrl, id, externalUrl, releaseDate, title, artist]);

  return (
    <StyledSongList>
      <img src={imgUrl} alt={id} />
      <p className="title">{title}</p>
      <p className="artist">{artist}</p>
      <p className="date">{releaseDate}</p>
      <button className="go-spotify" onClick={handleSpotify}>
        LISTEN
      </button>
      <button className="add-playlists" onClick={handlePlaylists}>
        ADD
      </button>
    </StyledSongList>
  );
};
export default SongList;
