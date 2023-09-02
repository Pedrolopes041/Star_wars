import {
  Container,
  ContainerDetails,
  ContainerDetailsP,
} from "./Falcon.styled";
import nave from "../../assets/images/pngwing.com.png";

const Falcon = () => {
  return (
    <Container>
      <img height="300px" src={nave} />
      <ContainerDetailsP>
        <p>
          A Millennium Falcon é uma lenda entre os contrabandistas e é cobiçada
          por muitos por ser o pedaço mais rápido de sucata da galáxia. Apesar
          de suas origens humildes e exterior desgastado, a nave que fez o
          Corredor de Kessel em menos de 12 parsecs desempenhou um papel em
          algumas das maiores vitórias da Aliança Rebelde e da Nova República.
        </p>
      </ContainerDetailsP>
    </Container>
  );
};

export default Falcon;
