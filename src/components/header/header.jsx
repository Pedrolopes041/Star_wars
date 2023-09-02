import {
  HeaderContainer,
  HeaderItem,
  HeaderItens,
  Logo,
} from "./header.styled";
import { FunctionComponent } from "react";
import logo from "../../assets/images/star-wars-logo-981.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleGaleriaClick = () => {
    navigate("/Galeria");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleHomeClick}>
        <img height="70px" src={logo} />
      </Logo>

      <HeaderItens>
        <HeaderItem onClick={handleHomeClick}>Início</HeaderItem>
        <HeaderItem onClick={handleGaleriaClick}>Galeria</HeaderItem>
      </HeaderItens>
    </HeaderContainer>
  );
};

export default Header;
