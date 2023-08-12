import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

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
      display: "flex",
      minHeight: "100vh",
    },
  },
};

const theme = extendTheme({ colors, styles });

export default theme;
