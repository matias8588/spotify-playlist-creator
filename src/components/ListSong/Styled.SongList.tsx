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
      padding: 10px 20px;
      background-color: transparent;
      color: #fff;
      font-weight: 700;
      position: relative;
      background-color: #1ed760;
    }
    .add-playlists {
      bottom: 56px;
      left: 65px;
      border-radius: 30px;
      :disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
    .go-spotify {
      bottom: 56px;
      right: 65px;
      border-radius: 30px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;
