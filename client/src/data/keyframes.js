import { keyframes } from "styled-components";

export const slideIn = distance => keyframes`
from{
  transform: translateX(${distance})
}
to{
  transform: translate(0)
}

`;

export const popUp = keyframes`
from{
  transform: translateY(200px)
}
to{
  transform: translate(0)
}
`;
