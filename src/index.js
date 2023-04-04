import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
