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
import Navbar from "./components/Header/Navbar";
import NextLink from 'next/link'


type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <Navbar />
      <Container my={{ base: "12"}}>
        <Card>
          <CardHeader>
            <VStack spacing="1">
              <Image src="/logo.png" width={50} height={50} alt="site logo" />
              <Text pt="1rem" fontSize={{base: "lg", lg:"2xl"}} fontWeight="medium">
                Bienvenido a Aqcess
              </Text>
              <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
              Inicia sesión con tu cuenta para comenzar a usar el sistema.
              </Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <form>

            <Stack spacing="2">
             
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Escribe tu Email" />
              </FormControl>

              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" placeholder="Crea una contraseña" />
              </FormControl>

              <FormControl>
              <Flex justify={{base: "center", md: "start"}} my="5">
              <Link as={NextLink} href="/admin/home" _hover={{outline: "none"}}>
              <Button minWidth={{base: "100%", md: "auto"}} colorScheme="brandBtn">
              Inicia Sesión
              </Button>
              </Link>
              </Flex>
              </FormControl>
              </Stack>

              <Text align="center" color="gray.500">¿Eres nuevo aquí?  
              <Link color='teal.500' as={NextLink} href="/signup"> Inscribirse</Link>
            </Text>

            </form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default Login;
