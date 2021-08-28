import styled from "styled-components"

export const Toggler = styled.button`
width: 35px;
height: 35px;
color: ${props => props.theme.toggleIcon};
background-color: transparent;
transition: all ${props => props.theme.transitionTime};
border: none;
outline: none;
cursor: pointer;
`;

