import { extendTheme } from "@chakra-ui/react";
import { colorsConfig } from "./colors";
import { fontsConfig, fontSizeConfig } from "./fonts";
import { buttonConfig } from "./buttons";

const theme = extendTheme({
  colors: colorsConfig,
  fonts: fontsConfig,
  fontSizes: fontSizeConfig,
  components: {
    Button: buttonConfig,
    Avatar: {
      sizes: {
        sm: {
          height: "34px",
          width: "34px",
        },
      },
    },
  },
});

export { theme };
