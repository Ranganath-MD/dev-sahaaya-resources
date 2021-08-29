import styled from "styled-components";

const Tag = styled.a`
border: none;
background: transparent;
padding: .5rem 1.5rem;
font-family: Arvo;
font-size: 2rem;
text-decoration: none;
color: ${props => props.theme.linkColor} !important;

&::before {
  content: "#"
}

&:hover {
  &::after {
    content: "👉"
  }
}

@media (max-width: 600px) {
  font-size: 1.5rem;
  padding: .5rem 1rem;
}
`

export default Tag