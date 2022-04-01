import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  h2 {
    font-size: 42px;
    color: #fff;
  }
  input {
    padding: 10px;
    margin-bottom: 30px;
    min-width: 300px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
  }
  button {
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 25px;
    font-weight: 600;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
