import origins from "./assets/origin.json";
import vocations from "./assets/vocations.json";
import equipment from "./assets/equipment.json";
import arms from "./assets/arms.json";

const diceRoll = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const handleAttributeDiceRoll = () => diceRoll(2, 13);

export const handleOrigin = () => ({
  ...origins[diceRoll(0, 4)],
  pronoun: diceRoll(0, 2),
});

export const handleVocation = (attributes) => {
  const possibleVocations = vocations.filter(
    ({ pre }) => (pre.atr && attributes[pre.atr] >= pre.value) || !pre.atr
  );
  return possibleVocations[diceRoll(0, possibleVocations.length)];
};

export const handleEquipament = () => [
  ...equipment[diceRoll(0, equipment.length)],
];

export const handleArms = (vocation) => {
  const filters = [];
  switch (vocation.nameM) {
    case "Clérigo":
      filters.push(
        "Maça",
        "Martelo",
        "Funda",
        "Armadura de couro",
        "Armadura de placas",
        "Cota de malha"
      );
      break;
    case "Guerreiro":
      filters.push(
        "Maça",
        "Martelo",
        "Funda",
        "Armadura de couro",
        "Armadura de placas",
        "Cota de malha",
        "Espada",
        "Espada Curta",
        "Machadinha",
        "Machado",
        "Arco Longo",
        "Arco Curto"
      );
      break;
    case "Mago":
      filters.push("Adaga", "Espada Curta", "Funda");
      break;
    case "Ladino":
      filters.push(
        "Adaga",
        "Espada Curta",
        "Funda",
        "Machadinha",
        "Armadura de couro"
      );
      break;
  }
  const possibleWeapons = arms.weapons.filter((v) => filters.includes(v));
  const weapon = possibleWeapons[diceRoll(0, possibleWeapons.length)];

  if (vocation.nameM === "Mago") {
    return { weapon, armor: null };
  }

  const possibleArmor = arms.armor.filter((v) => filters.includes(v.name));
  const armor = possibleArmor[diceRoll(0, possibleArmor.length)];

  return { weapon, armor };
};

export const attributes = {
  FORCA: "Força",
  AGILIDADE: "Agilidade",
  ESPIRITO: "Espírito",
  PORTE: "Porte",
};
export const handleGetMod = (value) => {
  switch (value) {
    case 2:
      return -3;
    case 3:
      return -2;
    case 4:
    case 5:
      return -1;
    case 6:
    case 7:
      return 0;
    case 8:
    case 9:
      return 1;
    case 10:
    case 11:
      return 2;
    case 12:
      return 3;
    default:
      return null;
  }
};
