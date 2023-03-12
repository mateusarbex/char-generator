export const Saving = ({ vocation }) => {
  const savings = ["Morte e Veneno", "Sopro e Paralisia", "Poder e Magia"];
  return (
    <div className="section-container">
      {savings.map((d, index) => (
        <div key={d}>
          <span>{d}</span>
          <span>: {vocation.char.saving[index]}</span>
        </div>
      ))}
    </div>
  );
};
