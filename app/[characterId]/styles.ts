import styled from "styled-components";

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CharacterInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const CharacterName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const CharacterStatus = styled.p<{
  status: string;
}>`
  color: ${(props) => (props.status === "Alive" ? "green" : "red")};
`;

export const CharacterDetails = styled.div`
  margin-top: 10px;
`;

export const CharacterDetailItem = styled.div`
  margin-bottom: 5px;
`;

export const BackButton = styled.button`
  padding: 10px 15px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  align-self: start;
  margin-bottom: 5px;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
