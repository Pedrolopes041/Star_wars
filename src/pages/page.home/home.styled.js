import { styled } from "styled-components";
import ImgSrc from "../../assets/images/astronomia-do-ceu-noturno-galactico-e-ciencia-combinaram-ia-generativa.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  height: 100vh;
  background-image: url(${ImgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContainerDetailsP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

export const ContainerDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
