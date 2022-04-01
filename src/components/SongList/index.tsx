import React from "react";
import { StyledSongList } from "./Styled.SongList";
import { useAuth } from "@/context/authContext";
import trash from "@/assets/trash.svg";
import headphones from "@/assets/headphones.svg";
import add from "@/assets/plus.svg";

interface ISongListProps {
  imgUrl?: string;
  id?: string;
  externalUrl?: string;
  releaseDate?: string;
  title?: string;
  artist?: string;
  titlePlaylist?: string;
  titleList?: string;
}

const SongList = ({
  imgUrl,
  id,
  externalUrl,
  releaseDate,
  title,
  artist,
  titlePlaylist,
  titleList,
}: ISongListProps) => {
  const { createPlaylists, deleteSongs }: any = useAuth();

  const handleSpotify = () => window.open(externalUrl, "_blank");

  const handlePlaylists = () => {
    createPlaylists({
      titlePlaylists: titlePlaylist,
      imgUrl,
      id,
      externalUrl,
      releaseDate,
      title,
      artist,
    });
  };

  const deleteTrack = (id: string | undefined) => deleteSongs(id);

  return (
    <StyledSongList>
      <img src={imgUrl} alt={id} />
      <p className="title">{title}</p>
      <p className="artist">{artist}</p>
      <p className="date">{releaseDate}</p>
      <button className="go-spotify" onClick={handleSpotify}>
        <img src={headphones} alt="hear" />
      </button>
      {!titleList ? (
        <button className="button-playlists" onClick={handlePlaylists}>
          <img src={add} alt="add" />
        </button>
      ) : (
        <button className="button-playlists" onClick={() => deleteTrack(id)}>
          <img src={trash} alt="delete song" />
        </button>
      )}
    </StyledSongList>
  );
};
export default SongList;
