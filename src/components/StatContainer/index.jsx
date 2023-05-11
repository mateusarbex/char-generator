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
            arms={character.arms}
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
          <div className="item-equipament-container">
            <article style={{ marginRight: "2rem" }}>
              <div className="section-title">Itens</div>
              <div>
                {character.equipment.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </div>
            </article>
            <article>
              <div className="section-title">Equipamento</div>
              <div>
                <li>{character.arms.weapon}</li>
                {character.arms.armor && (
                  <li key={character.arms.armor.name}>
                    {character.arms.armor?.name}
                  </li>
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
      <Vocation vocation={character.vocation} />
    </div>
  );
};
