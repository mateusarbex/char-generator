export const Origin = ({ origin }) => {
  return (
    <div>
      <div className="section-title">{origin.name}</div>
      {origin.description.map((d) => (
        <div key={d}>
          <span style={{ fontWeight: "bold" }}>{d.split(":")[0]}</span>
          <span>{d.split(":")[1] && ":" + d.split(":")[1]}</span>
        </div>
      ))}
    </div>
  );
};
