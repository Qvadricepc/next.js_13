import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;
