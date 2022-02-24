import styled from "@emotion/styled";
import { MultipleSelectCheck } from "./components/MultipleSelectCheck";
import dog from './image/dog.gif';

const Contenedor = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  color: #506663;
`;

const Heading = styled.h1`
  color: #506663;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 2.6rem;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #8eb0c1;
    display: block;
    margin: 10px auto 0 auto;
  }
`;
function App() {
  return (
    <Contenedor>
     
        <Heading>Buscar por raza al Instante </Heading>
        <div className="App">
        {/*Aqui utilizamos la url donde esta alojada la imagen*/}
        <img src={dog} alt="Logo" />
      </div>

        <MultipleSelectCheck />
     
    </Contenedor>
  );
}

export default App;