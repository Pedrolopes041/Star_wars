import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
    padding: 30px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const ContainerDetailsP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const ContainerDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
