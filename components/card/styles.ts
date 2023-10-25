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

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CharacterImage = styled.img`
  max-width: 100%;
  height: auto;
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
