import styled from "styled-components";

export const DynamicUnderlinedText = styled.p`
  transition: 0.4s ease-in all;
  padding: 0;
  margin: 0;  

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.color ? props.color : "#bebd88"};
    transition: all 0.4s ease-in;
  }

  :hover::after {
    background: black;
    width: 100%;
  }

  :hover {
    color: black;
  }
`;

export const HoverEffect = styled.p`
  transition: 0.4s ease-in all;
  padding: 0;
  margin: 0;  

  ::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :after:hover {
    color: black;
    width: 100%;
  }

  :hover {
    color: black;
  }
`;


