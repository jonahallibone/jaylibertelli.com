import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const TextLink = ({ href, isExternal, children }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink isExternal={isExternal} fontWeight="bold" color="blue.600">
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default TextLink;
