import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  margin: 5px 0;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`;
