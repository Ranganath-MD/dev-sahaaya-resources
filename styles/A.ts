import styled from "styled-components";

const A = styled.a`
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

export default A;