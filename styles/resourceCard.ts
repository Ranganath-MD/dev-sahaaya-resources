import styled from "styled-components";

const Card = styled.div`
  border-radius: 12px;
  background: ${props => props.theme.bodyBg};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;
  }
`;
export default Card;

export const CardLogo = styled.div`
  width: 50px;
  height: 50px;
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
