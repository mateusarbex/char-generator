import "./style.css";

export const Description = ({ origin, vocation }) => {
  return (
    <div className="description-title">
      {(origin.pronoun === 1 && origin.nameM) || origin.nameF}{" "}
      {(origin.pronoun === 1 && vocation.nameM) || vocation.nameF}
    </div>
  );
};
