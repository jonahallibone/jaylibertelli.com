import { Center, Heading, List, ListItem } from "@chakra-ui/react";
import TextLink from "components/text-link";

const Footer = () => {
  return (
    <Center flexDirection="column">
      <Heading
        fontSize="4xl"
        fontWeight="bold"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        lineHeight="1.2"
        textAlign="center"
      >
        If you ever want to get a job, you should probably ask me how to change
        this content
      </Heading>
      <List my={16}>
        <ListItem>
          The code lives here:{" "}
          <TextLink
            href="https://github.com/jonahallibone/jaylibertelli.com"
            isExternal
          >
            Github
          </TextLink>
        </ListItem>
        <ListItem>I will transfer the domain and host to you</ListItem>
        <ListItem>Merry xmas Jay</ListItem>
      </List>
    </Center>
  );
};

export default Footer;
