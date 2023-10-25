import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: 1px solid #007bff;
  background-color: #fff;
  color: #007bff;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
