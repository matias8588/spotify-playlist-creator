import React, { useState } from "react";
import { Wrapper } from "./Styled.CreatePlaylist";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const CreatePlaylist = () => {
  const { addNewPlaylist }: any = useAuth();
  const navigate = useNavigate();
  const [titleList, setTitleList] = useState<string>("");

  const handlePlaylist = () => {
    addNewPlaylist(titleList);
    navigate("/home");
  };
  return (
    <Wrapper>
      <h2>Create Your Playlist</h2>
      <input
        type="text"
        placeholder="Add playlist title *"
        value={titleList}
        onChange={(e) => setTitleList(e.target.value)}
      />
      <button disabled={titleList.length < 1} onClick={handlePlaylist}>
        Go
      </button>
    </Wrapper>
  );
};

export default CreatePlaylist;
