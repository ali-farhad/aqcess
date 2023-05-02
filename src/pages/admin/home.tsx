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
        <SimpleGrid minChildWidth='300px' spacing='40px'>
         {tilesData.map((tile) => (
            <Card  key={tile.id} _hover={{bg:"brandBtn.500", color: "white"}}>
            <CardHeader>
              <Image src={tile.Hicon} width={50} height={50} alt={tile.alt} />
            </CardHeader>
            <CardBody>
            <Link as={NextLink} href={tile.url}>
             <Button _hover={{color: "white"}} fontWeight="medium" fontSize="2xl" variant="link" color="black">{tile.btnTxt}</Button>
             </Link>
             <Text mt="8" maxWidth="15rem">{tile.bodyTxt}</Text>
            </CardBody>
            <CardFooter justify="end">
                <HiChevronDoubleRight fontSize="1.5rem"/>
            </CardFooter>
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
        url: "/admin/pass/create",
        alt: "pass logo",
        btnTxt: "create a pass",
        bodyTxt: "Aquí puedes crear un pase para recibir a un visitante.",
    },

    {
        id: 2,
        Hicon: "/icons/history.svg",
        url: "/admin/pass/history",
        alt: "history logo",
        btnTxt: "Historial deaccesos",
        bodyTxt: "Aquí encontrarás los accesos recientes y la información de los visitantes.",
    },
    {
        id: 3,
        Hicon: "/icons/contact.svg",
        url: "/admin/contacts",
        alt: "contact logo",
        btnTxt: "Contactos",
        bodyTxt: "Aquí puedes encontrar tus contactos.",
    },
    {
        id: 4,
        Hicon: "/icons/amenties.svg",
        url: "/admin/amenities",
        alt: "amenity logo",
        btnTxt: "Amendidades",
        bodyTxt: "Aquí puedes crear areas comunes, horarios y reservas creadas por residentes.",
    },
    {
        id: 5,
        Hicon: "/icons/settings.svg",
        url: "/admin/pass/create",
        alt: "settings logo",
        btnTxt: "Gestión de Residentes",
        bodyTxt: "Aquí puedes ver gestionar alos usuarios de vigialancia yresidentes.",
    },
    {
      id: 6,
      Hicon: "/icons/amenties.svg",
      url: "/admin/manage/amenities",
      alt: "amenity logo",
      btnTxt: "Administrar",
      bodyTxt: "Aquí puede crear, administrar y eliminar servicios",
  },
    {
      id: 7,
      Hicon: "/icons/pass.svg",
      url: "/admin/pass",
      alt: "pass logo",
      btnTxt: "Pase de escaneo",
      bodyTxt: "Aquí puede escanear un pase para proporcionar acceso a un visitante",
  },
    {
        id: 8,
        Hicon: "/icons/logout.svg",
        url: "/admin/pass/create",
        alt: "logout logo",
        btnTxt: "Salir",
        bodyTxt: "cerrar sesión",
    }
  ]