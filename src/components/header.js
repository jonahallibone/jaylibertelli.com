import {
  Box,
  Container,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box as="header" py={4} borderBottom="1px solid black">
      <Container maxW="7xl">
        <SimpleGrid columns={[2]}>
          <GridItem>
            <Text fontSize="lg" fontWeight="bold">
              <Link href="/">Jay Libertelli</Link>
            </Text>
          </GridItem>
          <GridItem>
            <HStack as="nav" justifyContent="end">
              <Link href="/">Home</Link>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Header;
