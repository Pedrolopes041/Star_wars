import { styled } from "styled-components";
import ImgSrc from "../../assets/images/astronomia-do-ceu-noturno-galactico-e-ciencia-combinaram-ia-generativa.jpg";

export const Container = styled.div`
  background-image: url(${ImgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
  gap: 5px;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
export const Card = styled.div`
  background: rgba(0, 0, 0, 0.70);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.50);
  border-radius: 8px;
  height: 230px;
  width: 200px;
  padding: 10px;
`;
