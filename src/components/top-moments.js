import {
  AspectRatio,
  Center,
  chakra,
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

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
    <SimpleGrid columns={[1, 2, 2]} width="100%">
      <GridItem order={isEven ? 0 : 1}>
        <MomentImage index={index} />
      </GridItem>
      <GridItem></GridItem>
    </SimpleGrid>
  );
};

const TopMoments = () => {
  return (
    <>
      <Center my={4}>
        <Heading as="h2" size="lg" fontWeight="bold" mb={4}>
          Jay&apos;s Top Moments of 2021
        </Heading>
      </Center>
      <VStack columns={[1, 2, 2]}>
        {momentArr.map((_, i) => (
          <Moment index={i} key={i} />
        ))}
      </VStack>
    </>
  );
};

export default TopMoments;
