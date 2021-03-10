import * as React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 15em;
`;

export const Loader: React.FC = () => (
  <LoaderContainer>{/* <object data={svgLoader} /> */}</LoaderContainer>
);
