import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
`;

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.70);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.50);
  border-radius: 8px;
  height: 230px;
  width: 200px;
  padding: 10px;
`;
