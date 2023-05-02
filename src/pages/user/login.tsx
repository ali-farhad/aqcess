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
  } from "@chakra-ui/react";
  import Image from "next/image";
  import React from "react";
  import NextLink from 'next/link'
  import Navbar from "../components/Header/Navbar";
import Seo from "../components/Header/Seo";
  
  
  type LoginProps = {};
  
  const Login: React.FC<LoginProps> = () => {
    return (
      <>

        <Seo pageTitle="Aqcess - Login" />

        <Navbar user={false}/>
        <Container my={{ base: "12"}}>
          <Card>
            <CardHeader>
              <VStack spacing="1">
                <Image src="/logo.png" width={50} height={50} alt="site logo" />
                <Text pt="1rem" fontSize={{base: "lg", lg:"2xl"}} fontWeight="medium">
                Bienvenido a Aqcess
                </Text>
                <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                crea una cuenta y registra tu apartamento o conjunto habitacional
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
              <form>
  
              <Stack spacing="2">
               
              <Select placeholder='seleccione su vivienda/complejo de apartamentos'>
                <option value='option1'>Royal Estate Apartements</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>

              <FormControl>
                  <FormLabel>Correo electrónico</FormLabel>
                  <Input type="email" placeholder="escriba su correo electrónico" />
                </FormControl>
  
                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Input type="password" placeholder="Crea una contraseña" />
                </FormControl>
  
                <FormControl>
                <Flex justify={{base: "center", md: "start"}} my="5">
                <Link as={NextLink} href="/user/home" _hover={{outline: "none"}}>
                <Button minWidth={{base: "100%", md: "auto"}} colorScheme="brandBtn">
                Acceso
                </Button>
                </Link>
                </Flex>
                </FormControl>
                </Stack>
  
                {/* <Text align="center" color="gray.500">¿Eres nuevo aquí?  
                <Link color='teal.500' as={NextLink} href="/signup"> Inscribirse</Link>
              </Text> */}
  
              </form>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default Login;
  