import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 70vh;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
