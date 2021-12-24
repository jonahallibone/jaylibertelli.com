import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Header from "components/header";
import Hero from "components/hero";
import TopMoments from "components/top-moments";
import Footer from "components/footer";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Jay Libertelli | Full Stack Noodle</title>
        <meta
          name="description"
          content="The home of the Noodle Jay Libertelli"
        />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxW="7xl" as="main">
        <Hero />
        <Divider />
        <TopMoments />
        <Divider my={8} />
        <Footer />
      </Container>
    </Box>
  );
}
