import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { StakingPage } from "./components/StakingPage/StakingPage";
import { extendTheme } from "@chakra-ui/react";
function App() {
  const theme = extendTheme({
    colors: {
      subText: "rgb(128, 137, 146)",
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <div style={{ backgroundColor: "#fafbfc" }}>
        <StakingPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
