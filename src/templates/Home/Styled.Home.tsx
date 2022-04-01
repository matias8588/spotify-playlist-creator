import styled from "styled-components";

export const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  && {
    .title-home {
      font-size: 42px;
      margin-top: 100px;
      color: #fff;
    }
    .search {
      margin: auto;
      max-width: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
      input {
        padding: 8px;
        border: none;
        border-radius: 5px;
        width: 100%;
        font-size: 20px;
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
        :disabled {
          opacity: 0.5;
        }
      }
    }
    .wrapper-playlist {
      background-color: #1db954;
    }
    .wrapper-tracks {
      display: grid;
      margin: auto;
      gap: 2em;
      grid-template-columns: 1fr;
    }
    .dashboard {
      display: grid;
    }
    .button-playlist {
      display: flex;
      justify-content: center;
      padding: 5px;
      border-radius: 25px;
      background-color: #00e86d;
    }
    .button-go-playlist {
      border: none;
      background-color: transparent;
      text-transform: capitalize;
      font-size: 22px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: 0;
      img {
        margin-left: 5px;
      }
    }
    .button-close {
      border: none;
      background-color: transparent;
      padding: 0;
      margin-top: 4;
      cursor: pointer;
      img {
        width: 17px;
        margin-right: 5px;
      }
    }
    .logout {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
      padding: 10px;
    }
    .wrapper-title {
      margin-left: 20px;
      display: flex;
      align-items: center;
      h2 {
        font-size: 32px;
        color: #fff;
      }
      button {
        height: min-content;
        margin-left: 20px;
        border: none;
        border-radius: 25px;
        background-color: #2e29e3;
        color: #fff;
        padding: 10px;
        font-weight: 900;
      }
    }
    .wrapper-titles-playlist {
      display: flex;
      padding: 10px;
      margin: 10px;
      border-radius: 5px;
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
