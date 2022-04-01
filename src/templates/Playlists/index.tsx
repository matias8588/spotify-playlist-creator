import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroImage from "@/components/Hero";
import ListSongs from "@/components/SongList";
import { useAuth } from "@/context/authContext";
import { StyledPlaylists } from "./Styled.Playlists";
import cover from "@/assets/plane.png";
import back from "@/assets/undo.svg";

const Playlists = () => {
  const { playlists }: any = useAuth();
  const { title } = useParams();
  const navigate = useNavigate();
  const newPlaylist = playlists.filter((item: any) => item.titlePlaylists === title);

  return (
    <HeroImage url={cover}>
      <StyledPlaylists>
        <div className="wrapper-title">
          <h2>{title}</h2>
          <button onClick={() => navigate("/home")}>
            <img src={back} alt="back" />
          </button>
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
    </HeroImage>
  );
};

export default Playlists;
