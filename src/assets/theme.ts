import { extendTheme } from "@chakra-ui/react";

const FILTER_STYLES = {
  baseStyle: {
    field: {
      borderRadius: "lg",
      border: "1px solid #DDD",
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
      cursor: "pointer",
      color: "#5A5A65",
    },
  },
  defaultProps: {
    focusBorderColor: "#DDD",
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
    "html, body": {
      margin: 0,
      padding: 0,
      height: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    body: {
      color: "#5A5A65",
    },
    "::-webkit-scrollbar": {
      display: "none",
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
  Input: FILTER_STYLES,
  Select: FILTER_STYLES,
};

const theme = extendTheme({ styles, fonts, colors, components });

export default theme;
