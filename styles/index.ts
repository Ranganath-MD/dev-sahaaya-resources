import styled from "styled-components";

export const Banner = styled.div`
  max-width: 700px;
  margin: 5rem auto 0;

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;



export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 2rem auto 0;
`
