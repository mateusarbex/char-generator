export const Description = ({ origin, vocation }) => {
  return (
    <div style={{ fontWeight: "bold" }}>
      {(origin.pronoun === 1 && origin.nameM) || origin.nameF}{" "}
      {(origin.pronoun === 1 && vocation.nameM) || vocation.nameF}
    </div>
  );
};
