import styled from "styled-components";

export const StyledPlaylists = styled.div`
  display: grid;
  && {
    .wrapper-title {
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 42px;
        text-transform: uppercase;
        color: #fff;
      }
      button {
        height: min-content;
        margin-left: 10px;
        border: none;
        background-color: #1dd46f;
        color: #fff;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: 800;
      }
    }
    .wrapper-list-songs {
      display: grid;
      margin: auto;
      gap: 2em;
      grid-template-columns: 1fr;
    }
    @media (min-width: 600px) {
      .wrapper-list-songs {
        grid-template-columns: "200px", 1fr;
      }
    }
    @media (min-width: 990px) {
      .wrapper-list-songs {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (min-width: 1200px) {
      .wrapper-list-songs {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
