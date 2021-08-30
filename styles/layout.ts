import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  background: ${props => props.theme.bodyBg};
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 1;
  top: 0.8rem;
  left: 0;
`;

export const Logo = styled.p`
  font-weight: 700;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  margin-top: 3rem;
  z-index: 0;
`;

export const ColorLine = styled.div`
  position: sticky;
  top: 0;
  background: #cc2b5e;
  background: -webkit-linear-gradient(to right, #753a88, #cc2b5e);
  background: linear-gradient(to right, #753a88, #cc2b5e);
  width: 100%;
  height: 0.8rem;
`;
