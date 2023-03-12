import "./style.css";
import { Origin, Attributes, Info, Saving, Vocation } from "../../components";
export const StatContainer = ({ character }) => {
  return (
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
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="section-title">Salvaguarda</div>
          <Saving vocation={character.vocation} />
          <div className="section-title">Equipamento</div>
          <div>
            {character.equipment.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </div>
        </div>
      </div>
      <Vocation vocation={character.vocation} />
    </div>
  );
};
