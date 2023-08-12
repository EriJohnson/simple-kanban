import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    ":root": {
      fontFamily: "Inter",
      lineHeight: "1.5",
      fontWeight: "normal",
      backgroundColor: "white",
      color: "gray.800",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTextSizeAdjust: "100%",
    },
    body: {
      margin: 0,
      minHeight: "100vh",
      color: "#5A5A65",
    },
  },
};

const fonts = {
  heading: "Inter",
  body: "Inter",
};

const colors = {
  priority: {
    low: "#dbeddb",
    medium: "#fdecc8",
    high: "#ffe2dd",
  },
};

const components = {
  Heading: {
    baseStyle: {
      color: "#212121",
    },
  },
};

const theme = extendTheme({ styles, fonts, colors, components });

export default theme;
