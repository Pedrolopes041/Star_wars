import Falcon from "../../components/Falcon/Falcon.componente";
import Header from "../../components/header/header";
import StarDead from "../../components/starDead/starDead.components";
import { Container, ContainerDetails, ContainerDetailsP } from "./home.styled";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <h1>Curiosidades</h1>

        <ContainerDetailsP>

          <ContainerDetails>
            <Falcon />
          </ContainerDetails>

          <ContainerDetails>
            <StarDead />
          </ContainerDetails>
          
        </ContainerDetailsP>
      </Container>
    </>
  );
};
export default Home;
