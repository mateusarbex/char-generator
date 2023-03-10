import { handleGetMod, attributes as attributesEnum } from "../../utils";

export const Attributes = ({ attributes }) => {
  return (
    <div>
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key}>
          <span style={{ fontWeight: "bold" }}>{attributesEnum[key]}</span>
          <span>: {value + " (" + handleGetMod(value) + ")"}</span>
        </div>
      ))}
    </div>
  );
};
