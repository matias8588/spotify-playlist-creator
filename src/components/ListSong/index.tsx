import React from "react";
import { StyledSongList } from "./Styled.SongList";

interface ISongListProps {
  imgUrl?: string;
  id?: string;
  externalUrl?: string;
  releaseDate?: string;
  title?: string;
  artist?: string;
}

const SongList = ({ imgUrl, id, externalUrl, releaseDate, title, artist }: ISongListProps) => {
  const handleSpotify = () => {
    window.open(externalUrl, "_blank");
  };

  return (
    <StyledSongList>
      <button className="go-spotify" onClick={handleSpotify}>
        <img src={imgUrl} alt={id} />
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
        <p className="date">{releaseDate}</p>
      </button>
    </StyledSongList>
  );
};
export default SongList;
