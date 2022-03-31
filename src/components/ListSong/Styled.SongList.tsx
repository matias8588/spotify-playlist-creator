import styled from "styled-components";

export const StyledSongList = styled.div`
  width: 300px;
  height: 400px;
  overflow-y: hidden;
  background-color: #000;
  border-radius: 5px;
  && {
    .go-spotify {
      cursor: pointer;
      border: none;
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;
