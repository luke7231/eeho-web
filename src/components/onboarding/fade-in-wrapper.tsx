import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInWrapper = styled.div`
    animation: ${fadeIn} 1s ease;
`;
