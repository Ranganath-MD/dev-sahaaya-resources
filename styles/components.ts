import styled from "styled-components";


export const Logo = styled.p`
  font-weight: 700;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 10vh auto 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem auto 0;
`;

export const Relative = styled.div`
  position: relative;
  width: 200px;
`;

export const List = styled.div`
padding-left: 20px;
width: 100%;
`;

export const Banner = styled.div`
  max-width: 700px;
  margin: 20vh auto 0;

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const ColorLine = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #cc2b5e;
  background: -webkit-linear-gradient(to right, #753a88, #cc2b5e);
  background: linear-gradient(to right, #753a88, #cc2b5e);
  width: 100%;
  height: 0.8rem;
`;

export const CardLogo = styled.div`
  width: 50px;
  height: 50px;
  img {
    pointer-events: none;
  }
`;

export const CardContent = styled.div`
  p {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const ResourceFlex = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 1.5rem;
`
