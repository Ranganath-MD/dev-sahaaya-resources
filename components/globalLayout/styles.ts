import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const Logo = styled.p`
  font-weight: 700;
`

export const Content = styled.div`
  padding: 1rem 2rem;
`;
export const ColorLine = styled.div`
  background: #cc2b5e;
  background: -webkit-linear-gradient(
    to right,
    #753a88,
    #cc2b5e
  );
  background: linear-gradient(
    to right,
    #753a88,
    #cc2b5e
  );

  width: 100%;
  height: .8rem;
`;
