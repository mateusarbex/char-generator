import "./App.css";
import logo from "./assets/images/logo.png";
import { useState } from "react";
import {
  handleAttributeDiceRoll,
  attributes,
  handleOrigin,
  handleVocation,
} from "./utils";
import { Attributes, Vocation, Info, Origin, Description } from "./components";

function App() {
  const [character, setCharacter] = useState(null);

  const handleCreateNewCharacter = () => {
    window.scrollTo(0, 0);
    const attributeMap = Object.fromEntries(
      Object.keys(attributes).map((key) => [key, handleAttributeDiceRoll()])
    );
    const origin = handleOrigin();
    const vocation = handleVocation(attributeMap);
    setCharacter({ attributes: attributeMap, origin, vocation });
  };

  return (
    <div className="App">
      <div className="container">
        <img
          src={logo}
          alt="Espadas & Punhais"
          className="logo"
          mode="true"
        ></img>
        {character && (
          <div>
            <Description
              origin={character.origin}
              vocation={character.vocation}
            ></Description>
            <div className="stats-container">
              <Origin origin={character.origin} />

              <div>
                <div className="section-title">Atributos</div>
                <div className="attributes-container">
                  <Attributes attributes={character.attributes} />
                  <Info
                    vocation={character.vocation}
                    attributes={character.attributes}
                    origin={character.origin}
                  ></Info>
                </div>
              </div>
              <Vocation vocation={character.vocation}></Vocation>
            </div>
          </div>
        )}
        <div
          className={"generator-link" + ((character && " new-char") || "")}
          onClick={() => handleCreateNewCharacter()}
        >
          {(character && "Gerar outro personagem?") || "Criar novo personagem"}
        </div>
      </div>
    </div>
  );
}

export default App;
