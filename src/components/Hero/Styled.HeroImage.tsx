import styled from "styled-components";
type HeroImageStyledProps = {
  url?: string;
};

export const Container = styled.div<HeroImageStyledProps>`
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
`;
