import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  GridItem,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={4} borderBottom="1px solid black">
      <Container maxW="7xl">
        <SimpleGrid columns={[2]}>
          <GridItem>
            <HStack h="100%">
              <Text fontSize="lg" fontWeight="bold">
                <Link href="/">Jay Libertelli</Link>
              </Text>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack as="nav" justifyContent="flex-end">
              <Link href="/">Home</Link>
              <IconButton
                variant="outline"
                aria-label="Call Sage"
                fontSize="20px"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Header;
