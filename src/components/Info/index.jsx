import { useCallback } from "react";
import { handleGetMod } from "../../utils";

export const Info = ({ vocation, attributes, origin, arms }) => {
  const handleMana = useCallback(() => {
    if (vocation.char.mana) {
      return (
        handleGetMod(attributes[vocation.char.mana.mod]) +
        vocation.char.mana.bonus
      );
    } else {
      return 0;
    }
  }, [vocation, attributes]);

  const handleAtaque = useCallback(() => {
    return Math.floor(
      (handleGetMod(attributes.AGILIDADE) + handleGetMod(attributes.FORCA)) / 2
    );
  }, [attributes]);

  const handleVit = useCallback(() => {
    if (!origin.mod.case) {
      return origin.mod.value;
    } else {
      return (
        (attributes.FORCA >= origin.mod.case.value && origin.mod.case.mod) ||
        origin.mod.value
      );
    }
  }, [attributes, origin]);

  const handleDefesa = useCallback(() => {
    const formula =
      Math.floor(
        handleGetMod(attributes.AGILIDADE) + handleGetMod(attributes.ESPIRITO)
      ) + 6;
    return (formula < 6 && 6) || formula;
  }, [attributes]);
  return (
    <div className="section-container">
      <div>
        <span>Vitalidade</span>: {attributes.FORCA + handleVit()}
      </div>
      <div>
        <span>Pontos de Mana</span>: {handleMana()}
      </div>
      <div>
        <span>Ataque</span>: {handleAtaque()}
      </div>
      <div>
        <span>Defesa</span>: {handleDefesa()}
      </div>
      <div>
        <span>Armadura</span>: {arms.armor?.value || 0}
      </div>
    </div>
  );
};
