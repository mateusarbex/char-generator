import { handleGetMod, attributes as attributesEnum } from "../../utils";

export const Attributes = ({ attributes }) => {
  return (
    <div className="section-container">
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key}>
          <span>{attributesEnum[key]}</span>
          <span>: {value + " (" + handleGetMod(value) + ")"}</span>
        </div>
      ))}
    </div>
  );
};
