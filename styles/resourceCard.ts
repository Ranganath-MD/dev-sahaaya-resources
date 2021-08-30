import styled from "styled-components";
import Image from "next/image";

export const Card = styled.div`
  display: flex;
  padding: 10px;
`
export const CardLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`
export const CardContent = styled.div`
  margin-left: 10px;
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
  span {
    font-size: 0.8rem;
    color: ${props => props.theme.mutedText}
  }
`