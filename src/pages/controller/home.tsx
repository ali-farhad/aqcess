import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    VStack,
    Link,
    InputGroup,
    InputRightElement,
    CardFooter,
    SimpleGrid
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "../components/Header/Navbar";
  import Seo from "../components/Header/Seo";
  
  import { HiChevronDoubleRight } from "react-icons/hi";
  

  type HomeProps = {};
  
  const Home: React.FC<HomeProps> = () => {
   
   
  
    return (
      <>
        <Seo pageTitle="Aqcess - Home" />
  
        <Navbar user={true} />
        <Container px={{base: "2rem", md: "0"}} maxW={{base: "100%", md:"80%"}} my={{ base: "12" }}>
        <SimpleGrid columns={{base: 2, md: 3}} spacing="15px">
         {tilesData.map((tile) => (
            <Card  key={tile.id} _hover={{bg:"brandBtn.500", color: "white"}}>
            <CardHeader>
              <Flex justify="end">
            <HiChevronDoubleRight fontSize="1.5rem"/>
            </Flex>
              <Image src={tile.Hicon} width={50} height={50} alt={tile.alt} />
            </CardHeader>
            <CardBody>
            <Link as={NextLink} href={tile.url}>
             <Button _hover={{color: "white"}} fontWeight="bold" fontSize={{base: "sm", md:"2xl"}} variant="link" color="black">{tile.btnTxt}</Button>
             </Link>
             <Text fontSize={{base: "sm", md:"lg"}} mt={{base: "1rem", md: "8"}} maxWidth={{base: '100%', md:"15rem"}}>{tile.bodyTxt}</Text>
            </CardBody>
          
          </Card>
         ))}
         
        </SimpleGrid>
          

          
        </Container>
      </>
    );
  };
  export default Home;
  

  //temp data
  const tilesData = [
    {
        id: 1,
        Hicon: "/icons/pass.svg",
        url: "/controller/pass/success",
        alt: "pass logo",
        btnTxt: "Escanear Pase",
        bodyTxt: "Toca aquí para escanear un pase.",
    },

   
   
    {
        id: 3,
        Hicon: "/icons/history.svg",
        url: "/controller/history",
        alt: "history logo",
        btnTxt: "Historial de Accesos",
        bodyTxt: "Toca aquí para ver quien ha accedido anteriormente",
    },
   
    {
        id: 4,
        Hicon: "/icons/logout.svg",
        url: "/admin/pass/create",
        alt: "logout logo",
        btnTxt: "Salir",
        bodyTxt: "cerrar sesión",
    }
  ]