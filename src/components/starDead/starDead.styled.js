import styled, { keyframes } from "styled-components";
import nave from "../../assets/images/pngwing.com.png";

const float = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 500px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 480px;
  gap: 10px;

  img {
    animation: ${float} 2s ease-in-out infinite alternate;
    src: ${nave};
  }
`;
export const ContainerDetailsP = styled.div`
  background-color: #1b1b1b;
  padding: 10px;
  border-radius: 8px;
  
`;
