import Galeria from "./pages/page.galeria/page.components";
import Home from "./pages/page.home/home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
      </Routes>
    </>
  );
};

export default App;
