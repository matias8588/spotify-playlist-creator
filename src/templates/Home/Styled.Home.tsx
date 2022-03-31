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
    .wrapper-search {
      margin-top: 100px;
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
    @media (min-width: 600px) {
      .wrapper-tracks {
        grid-template-columns: repeat(2, 1fr);
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
