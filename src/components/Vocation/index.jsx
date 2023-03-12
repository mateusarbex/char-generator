import reactStringReplace from "react-string-replace";
import magic from "../../assets/magic.json";

export const Vocation = ({ vocation }) => {
  const tradition = [...magic];
  return (
    <div>
      <div className="section-title">{vocation.name}</div>
      <div className="section-container">
        {vocation.char.initial_talent.slice(0, 2).map((d) => (
          <div key={d}>
            <span>{d.split(":")[0]}</span>:
            <span>
              {d.split(":")[1] &&
                reactStringReplace(
                  d.split(":")[1],
                  /(Tradições Mágicas|Tradições|Habilidades|Espírito|Força|Agilidade|Porte)/,
                  (match, index) => (
                    <span key={(match, index)} style={{ fontWeight: "bold" }}>
                      {match}
                    </span>
                  )
                )}
            </span>
          </div>
        ))}
      </div>
      {vocation.name === "Magos" && (
        <div>
          <div className="section-title">Tradições</div>
          {[null, null, null].map((d, index) => {
            const random = Math.floor(Math.random() * tradition.length);
            d = tradition[random];
            tradition.splice(random, 1);
            return (
              <div key={index}>
                <span style={{ fontWeight: "bold" }}>{d.name}</span>
                <span>{" (" + d.type + ")"}</span>
              </div>
            );
          })}
        </div>
      )}
      {vocation.name === "Ladinos" && (
        <div>
          <div className="section-title">Habilidades</div>
          {vocation.char.initial_talent.slice(2).map((d, index) => (
            <div key={index}>
              <span style={{ fontWeight: "bold" }}>{d.split("(")[0]}</span>
              <span>{" (" + d.split("(")[1]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
