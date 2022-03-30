import React from "react";

import { Container } from "./Styled.HeroImage";

type HeroImageProps = {
  children?: React.ReactNode | null;
  url?: string | undefined;
};

const HeroImage = ({ children = null, url = undefined }: HeroImageProps) => {
  return <Container url={url}>{children}</Container>;
};

export default HeroImage;
