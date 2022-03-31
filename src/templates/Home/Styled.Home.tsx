import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: #1ed760;
  height: 100%;
  display: flex;
  flex-direction: column;
  && {
    .title-home {
      font-size: 42px;
    }
    .search {
      margin: auto;
      max-width: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        width: 100%;
      }
      button {
        border: none;
        height: 36px;
        margin-left: 10px;
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .wrapper-tracks {
      display: grid;
      margin: auto;
      gap: 2em;
      grid-template-columns: 1fr;
    }
    .dashboard {
      display: grid;
      grid-template-columns: 10% 90%;
    }
    .button-playlist {
      border: none;
      background-color: transparent;
      text-transform: capitalize;
      font-size: 22px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: center;
      img {
        margin-left: 5px;
      }
    }
    .logout {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      padding: 10px;
    }
    @media (min-width: 600px) {
      .wrapper-tracks {
        grid-template-columns: "200px", 1fr;
      }
    }
    @media (min-width: 990px) {
      .wrapper-tracks {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (min-width: 1200px) {
      .wrapper-tracks {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
