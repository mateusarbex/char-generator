import magic from "../../assets/magic.json";

export const Vocation = ({ vocation }) => {
  const tradition = [...magic];
  return (
    <div>
      <div className="section-title">{vocation.name}</div>
      {vocation.char.initial_talent.slice(0, 2).map((d) => (
        <div key={d}>
          <span style={{ fontWeight: "bold" }}>{d.split(":")[0]}</span>
          <span>
            {d.split(":")[1] &&
              ":" +
                d
                  .split(":")[1]
                  .replace("Tradições", ["Teste", <span>Teste</span>])}
          </span>
        </div>
      ))}
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
