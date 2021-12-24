import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/header";
import Hero from "components/hero";
import TopMoments from "components/top-moments";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Jay Libertelli | Full Stack Noodle</title>
        <meta
          name="description"
          content="The home of the Noodle Jay Libertelli"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxW="7xl" as="main">
        <Hero />
        <Divider />
        <TopMoments />
      </Container>
    </Box>
  );
}
