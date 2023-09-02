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
            A Millennium Falcon é um cargueiro padrão YT-1300, produzido pela
            fabricante Corellian Engineering Corporation (CEC). Sua linha de
            montagem é a CEC Orbital 7 e o número de série é YT 492727ZED1.
          </p>
        </ContainerDetailsP>

    </Container>
  );
};

export default Falcon;
