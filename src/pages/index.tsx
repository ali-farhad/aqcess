import {
  Box,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";

import Seo from "./components/Header/Seo";
import Image from "next/image";
import Navbar from "./components/Header/Navbar";

export default function Home() {

  return (
    <>
      <Seo pageTitle="Aqcess - Home Page" />
      <main>
       <Navbar user={false}/>
        <Container maxW="100%" py={{ base: "4", lg: "20" }}>
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            justify="center"
            align="center"
          >
            <Box>
              <Image
                priority
                src="/coming_soon.svg"
                width={250}
                height={250}
                alt="comming soon"
              />
            </Box>
            <Box>
              <Text
                my={{ base: "2.5rem", md: "0" }}
                pl={{ base: "0", md: "5rem" }}
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                fontWeight="hairline"
              >
                Comming Soon!
              </Text>
            </Box>
          </Flex>
        </Container>
      </main>
    </>
  );
}
