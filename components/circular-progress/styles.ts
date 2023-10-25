import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircularProgressWrapper = styled.div<{
  size: number;
  strokeWidth: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: ${(props) => props.strokeWidth}px solid transparent;
  border-top: ${(props) => props.strokeWidth}px solid ${(props) => props.color};
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;
