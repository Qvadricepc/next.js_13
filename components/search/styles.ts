import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px; /* Set an appropriate width */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 4px;
`;

export const IconContainer = styled.div`
  padding: 8px;
  background-color: #f0f0f0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;
