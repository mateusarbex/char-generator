export const Saving = ({ vocation }) => {
  const savings = ["Morte e Veneno", "Sopro e Paralisia", "Poder e Magia"];
  console.log(vocation.char.saving[1]);
  return (
    <div>
      {savings.map((d, index) => (
        <div key={d}>
          <span style={{ fontWeight: "bold" }}>{d}</span>
          <span>: {vocation.char.saving[index]}</span>
        </div>
      ))}
    </div>
  );
};
