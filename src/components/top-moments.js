import {
  AspectRatio,
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Captions from "extras/captions";

const momentArr = Array(21).fill("");

const MomentImage = ({ index }) => {
  if (Number(index) + 1 !== 4 && Number(index) + 1 !== 11) {
    return (
      <AspectRatio ratio={16 / 9} width="100%" minH="500px">
        <Image
          src={`/images/moments/jay-moment-${index + 1}.jpeg`}
          layout="fill"
          objectFit="contain"
          alt={`Jay's Top Moment ${index + 1}`}
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio ratio={16 / 9} width="100%" minH="500px">
      <video alt={`Jay's Top Moment ${index + 1}`} controls autoPlay muted loop>
        <source
          src={`/images/moments/jay-moment-${index + 1}.mov`}
          type="video/mp4"
        />
      </video>
    </AspectRatio>
  );
};

const Moment = ({ index }) => {
  const isEven = index % 2 === 0;

  return (
    <SimpleGrid columns={[1, 2, 2]} width="100%" my={8}>
      <GridItem order={[1, isEven ? 0 : 1]}>
        <MomentImage index={index} />
      </GridItem>
      <GridItem my={4}>
        <Center h="100%">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            lineHeight="1.2"
          >
            {Captions[index]}{" "}
          </Text>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
};

const TopMoments = () => {
  return (
    <>
      <Center my={16} flexDirection="column">
        <Heading as="h2" size="lg" fontWeight="bold">
          Jay&apos;s Top Moments of 2021
        </Heading>
        <Heading as="h3" size="md" fontWeight="light" color="gray.500" my={4}>
          Featuring his friends, lovers, and Jonah
        </Heading>
      </Center>
      <VStack spacing={[8]}>
        {momentArr.map((_, i) => (
          <Moment index={i} key={i} />
        ))}
      </VStack>
    </>
  );
};

export default TopMoments;
