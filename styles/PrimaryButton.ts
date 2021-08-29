import styled from "styled-components";

const PrimaryButton = styled.button`
  border-radius: 0.25rem;
  font-weight: 800;
  margin: 2rem 0;
  color: #fff;
  line-height: 1.2;
  min-width: 2.5rem;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  background: ${props => props.theme.primaryButtonColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:hover {
    transform: scale(1.02)
  }
`;

export default PrimaryButton