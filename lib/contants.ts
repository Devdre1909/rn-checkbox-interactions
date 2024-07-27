const randomCuisines = [
  "Italian",
  "Mexican",
  "Chinese",
  "Moroccan",
  "Russian",
  "German",
  "Peruvian",
  "Egyptian",
  "Jamaican",
  "Indian",
  "Japanese",
  "Lebanese",
  "Turkish",
  "Brazilian",
  "Thai",
  "Greek",
  "French",
  "Spanish",
  "Korean",
  "Vietnamese",
];

export const Cuisines = randomCuisines.map((cuisine, i) => ({
  id: i,
  name: cuisine,
  selected: false,
}));

export const ACTIVE_COLOR = "#EF8E52";
export const INACTIVE_COLOR = "#B3B1B4";
