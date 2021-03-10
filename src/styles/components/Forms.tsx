import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1170px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerSaveButton = styled.div`
  position: sticky;
  top: 7em;
  z-index: 102;
  float: right;
`;

export const Form = styled.form`
  padding: 1em 2em;
`;

export const SectionForm = styled.section`
  max-width: 25em;
  width: 100%;
`;
