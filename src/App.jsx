import "./App.css";
import logo from "./assets/images/logo.png";
import { useEffect, useState } from "react";
import {
  handleAttributeDiceRoll,
  attributes,
  handleOrigin,
  handleVocation,
  handleEquipament,
  handleArms,
} from "./utils";
import { Description } from "./components";

import { StatContainer } from "./components/StatContainer";

function App() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    handleCreateNewCharacter();
  }, []);

  const handleCreateNewCharacter = () => {
    window.scrollTo(0, 0);
    const attributeMap = Object.fromEntries(
      Object.keys(attributes).map((key) => [key, handleAttributeDiceRoll()])
    );
    const origin = handleOrigin();
    const vocation = handleVocation(attributeMap);
    const equipment = handleEquipament();
    const arms = handleArms(vocation);
    setCharacter({
      attributes: attributeMap,
      origin,
      vocation,
      equipment,
      arms,
    });
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
            />
            <StatContainer character={character} />
          </div>
        )}
        <div
          className={"generator-link" + ((character && " new-char") || "")}
          onClick={() => handleCreateNewCharacter()}
        >
          Gerar outro personagem?
        </div>
      </div>
    </div>
  );
}

export default App;
