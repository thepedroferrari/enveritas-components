import tokens from "@enveritas/design-tokens";

export const indexedColors = [
  tokens.color.navy[700],
  tokens.color.cyan[400],
  tokens.color.orange[500],
  tokens.color.purple[800],
  tokens.color.yellow[400],
  tokens.color.blue[600],
  tokens.color.red[400],
];

export const text = {
  dark: tokens.color.gray[800],
  medium: tokens.color.gray[600],
  light: tokens.color.gray[400],
};

export const regions = [
  {
    regionId: "africa",
    region: "Africa",
    color: {
      dark: tokens.color.yellow[800],
      light: tokens.color.yellow[200],
      primary: tokens.color.yellow[500],
      text: tokens.color.yellow[800],
    },
  },
  {
    regionId: "southeast_asia",
    region: "Asia & Pacific",
    color: {
      dark: tokens.color.cyan[800],
      light: tokens.color.cyan[100],
      primary: tokens.color.cyan[400],
      text: tokens.color.cyan[800],
    },
  },
  {
    regionId: "meso_america",
    region: "Mesoamerica",
    color: {
      dark: tokens.color.orange[800],
      light: tokens.color.orange[200],
      primary: tokens.color.orange[700],
      text: tokens.color.orange[800],
    },
  },
  {
    regionId: "south_america",
    region: "South America",
    color: {
      dark: tokens.color.purple[800],
      light: tokens.color.purple[200],
      primary: tokens.color.purple[800],
      text: tokens.color.purple[800],
    },
  },
];
