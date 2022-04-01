import styled from "styled-components";

export const StyledSongList = styled.div`
  width: 300px;
  height: 410px;
  overflow-y: hidden;
  background-color: #000;
  border-radius: 5px;
  color: #fff;
  && {
    button {
      cursor: pointer;
      border: 1px solid #fff;
      padding: 10px;
      background-color: transparent;
      color: #fff;
      font-weight: 700;
      position: relative;
      background-color: #1ed760;
    }
    .add-playlists {
      bottom: 70px;
      left: 90px;
      border-radius: 30px;
    }
    .go-spotify {
      bottom: 70px;
      right: 90px;
      border-radius: 50%;
    }
    img {
      width: 100%;
      height: auto;
    }
    .delete-playlists {
      bottom: 70px;
      left: 90px;
      border-radius: 30px;
    }
  }
`;
