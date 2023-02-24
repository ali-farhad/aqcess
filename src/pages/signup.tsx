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


type signupProps = {};

const Signup: React.FC<signupProps> = () => {
  return (
    <>
      <Navbar user={false} />
      <Container my={{ base: "12"}}>
        <Card>
          <CardHeader>
            <VStack spacing="1">
              <Image src="/logo.png" width={50} height={50} alt="site logo" />
              <Text pt="1rem" fontSize={{base: "lg", lg:"2xl"}} fontWeight="medium">
                Bienvenido a Aqcess
              </Text>
              <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Crea la cuenta de tu empresa para comenzar a usar el sistema.
              </Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <form>

            <Stack spacing="2">
              <FormControl>
                <FormLabel>Nombre Completo</FormLabel>
                <Input type="text" placeholder="Escribe tu nombre completo" />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Escribe tu Email" />
              </FormControl>

              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" placeholder="Crea una contraseña" />
              </FormControl>

              <FormControl>
                <FormLabel>Residentes</FormLabel>
                <Select color="gray.500" placeholder='Selecciona el número de anfitriones'>
  <option value='option1'>4</option>
  <option value='option2'>8</option>
  <option value='option3'>12</option>
</Select>
              </FormControl>

              <FormControl>
              <Flex justify={{base: "center", md: "start"}} my="5">
              <Button minWidth={{base: "100%", md: "auto"}} colorScheme="brandBtn">
              Crear Cuenta
              </Button>
              </Flex>
              </FormControl>
              </Stack>

              <Text align="center" color="gray.500">Si ya tienes cuenta  
              <Link color='teal.500' as={NextLink} href="/login"> Inicia Sesión</Link>
            </Text>

            </form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default Signup;
