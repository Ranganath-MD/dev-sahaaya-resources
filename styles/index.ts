import styled from "styled-components";

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
export const Sticky = styled.div`
  position: sticky;
  height: 85vh;
  overflow: overlay;
  top: 110px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.lightAccent};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.mutedText};
  }
`;
export const List = styled.div`
  padding-left: 20px;
  width: 100%;
`;
export const A = styled.a`
  display: block;
  border: none;
  background: transparent;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: Arvo;
  text-decoration: none;
  color: ${(props) => props.theme.linkColor};

  &::before {
    content: "#";
  }
`;


