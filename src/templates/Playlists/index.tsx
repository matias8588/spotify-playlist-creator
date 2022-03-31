import React from "react";
import { useAuth } from "../../context/authContext";

const Playlists = () => {
  const { playlists }: any = useAuth();

  console.log(playlists);

  return <div>Playlists</div>;
};

export default Playlists;
