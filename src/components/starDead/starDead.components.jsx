import { Container, ContainerDetailsP} from "./starDead.styled";
import starDead from "../../assets/images/star_dead.png";

const StarDead = () => {
  return (
    <Container>

        <img height="300px" src={starDead} />
        <ContainerDetailsP>
          <p>
            Com mais de 120 quilômetros de diâmetro e mais de 357 andares
            internos, a Estrela da Morte tem um tamanho que pode ser comparado
            com o de uma pequena lua. Essa arma, que também é uma gigantesca
            estação especial, tem a capacidade de abrigar desde TIE Fighters até
            os poderosos e enormes Destroyers Imperiais
          </p>
        </ContainerDetailsP>
        
    </Container>
  );
};

export default StarDead;
