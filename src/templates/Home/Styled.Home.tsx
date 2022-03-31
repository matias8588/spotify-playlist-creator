import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: #1ed760;
  height: 100vh;
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
  }
`;
