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

export const Content = styled.div`
  padding: 1rem 2rem;
  margin-top: 3rem;
  z-index: 0;
`;


