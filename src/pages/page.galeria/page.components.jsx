import axios from "axios";
import Header from "../../components/header/header";
import { Container, ContainerDetails, Card } from "./page.styled";
import { useEffect, useState } from "react";

const Galeria = () => {
  const [person, setPerson] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get("https://swapi.dev/api/people/");

      setPerson(data.results);
    } catch (error) {
      console.log("Os dados não foram recuperador !");
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  

  return (
    <>
      <Header />
      <Container>
        <h1>Personagens</h1>
        <ContainerDetails>
          {person.map((p) => (
            <Card>
              <p>Nome: {p.name}</p>
              <p>Mass: {p.mass}</p>
              <p>hair color: {p.hair_color}</p>
              <p>skin color: {p.skin_color}</p>
              <p>eye color: {p.eye_color}</p>
              <p>gender: {p.gender}</p>
            </Card>
          ))}
        </ContainerDetails>
      </Container>
    </>
  );
};

export default Galeria;
