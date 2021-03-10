import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1em;
  font-size: 12px;
  display: flex;
  color: grey;
  flex-direction: column;
  align-items: center;
`;

export const Footer: React.FC = () => (
  <FooterContainer>
    <p>&copy; 2021 - MiguelHonrubia</p>
    <p>All access to this page is being monitored for security purposes</p>
  </FooterContainer>
);
