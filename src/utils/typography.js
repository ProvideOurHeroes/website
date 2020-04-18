import Typography from "typography";

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Futura PT"],
  bodyFontFamily: ["Futura PT"],
  headerColor: "red",
  bodyColor: "blue"
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
