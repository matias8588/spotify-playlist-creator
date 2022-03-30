import styled from "styled-components";

export const StyledLogin = styled.div`
  display: grid;
  height: 100vh;
  && {
    .title-login {
      font-size: 64px;
      color: #fff;
    }
    .subtitle-login {
      font-size: 24px;
      color: #fff;
    }
    .button-login {
      width: 300px;
      padding: 10px;
      font-size: 20px;
      background-color: #1ed760;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      :hover {
        opacity: 0.6;
      }
    }
    @media (max-width: 600px) {
      .subtitle-login {
        font-size: 20px;
      }
    }
  }
`;
