import * as React from "react";
import { CoolContainer } from "../components/general/CoolContainer";
import { Title, Container, Description } from "../styles/components/General";

const Home: React.FC = () => {
  return (
    <CoolContainer>
      <Container>
        <Title>React / TypeScript / MaterialUI / Template</Title>
        <Description>by MiguelHonrubia</Description>
      </Container>
    </CoolContainer>
  );
};

export default Home;
