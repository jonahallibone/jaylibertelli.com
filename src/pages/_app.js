import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace",
  },
});

function MyApp({ Component }) {
  return (
    <ChakraProvider theme={overrides}>
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
