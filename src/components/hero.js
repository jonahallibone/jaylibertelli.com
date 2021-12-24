import {
  AspectRatio,
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import TextLink from "components/text-link";

const Hero = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} my={8}>
      <GridItem>
        <VStack justifyContent="center" alignItems="flex-start" h="100%">
          <Text>HEY THERE 👋 I'M</Text>
          <Box my={8}>
            <Heading
              size="2xl"
              fontWeight="bolder"
              my={8}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              lineHeight="1.2"
            >
              jay libertelli.
            </Heading>
          </Box>
          <Text color="green.600">(SOON TO BE) FULL STACK DEVELOPER 👨‍💻</Text>
          <Text color="gray.500">
            I am also an avid{" "}
            <TextLink
              href="https://www.instagram.com/eggflipz.jpeg/?hl=en"
              isExternal
            >
              egg flipper
            </TextLink>
            , boyfriend to{" "}
            <TextLink
              href="https://www.instagram.com/lily_marie/?hl=en"
              isExternal
            >
              Lily Ling
            </TextLink>
            , and general nice person.
          </Text>
        </VStack>
      </GridItem>
      <GridItem>
        <AspectRatio ratio={9 / 16} maxH="500px" my={[8, 8, 0]}>
          <Image
            src="/images/header-jay.jpg"
            objectFit="contain"
            alt="Jay and Lily"
            layout="fill"
          />
        </AspectRatio>
      </GridItem>
    </SimpleGrid>
  );
};

export default Hero;
