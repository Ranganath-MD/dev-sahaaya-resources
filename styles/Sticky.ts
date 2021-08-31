import styled from "styled-components";

const Sticky = styled.div`
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

export default Sticky;