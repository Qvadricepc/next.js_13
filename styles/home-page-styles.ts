import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: bisque;
  padding: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
