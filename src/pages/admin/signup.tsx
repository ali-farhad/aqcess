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
import NextLink from "next/link";
import Navbar from "./../components/Header/Navbar";

type signupProps = {};

const Signup: React.FC<signupProps> = () => {
  return (
    <>
      <Navbar user={false} />
      <Container my={{ base: "12" }}>
        <Card>
          <CardHeader>
            <VStack spacing="1">
              <Image src="/logo.png" width={50} height={50} alt="site logo" />
              <Text
                pt="1rem"
                fontSize={{ base: "lg", lg: "2xl" }}
                fontWeight="medium"
              >
                Bienvenido a Aqcess
              </Text>
              <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Crea una cuenta y registra tu apartamento o conjunto
                habitacional
              </Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <form>
              <Stack spacing="2">
                <FormControl>
                  <FormLabel>Nombre Completa</FormLabel>
                  <Input type="text" placeholder="Escriba su nombre completo" />
                </FormControl>

                <FormControl>
                  <FormLabel>correo electrónico</FormLabel>
                  <Input
                    type="email"
                    placeholder="escribe tu correo electronico"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Contraseña</FormLabel>
                  <Input type="password" placeholder="Crea una contraseña" />
                </FormControl>

                <FormControl>
                  <FormLabel>confirmar Contraseña</FormLabel>
                  <Input type="password" placeholder="confirmar Contraseña" />
                </FormControl>

                <FormControl>
                  <FormLabel>
                  Número de residentes en su complejo de vivienda?
                  </FormLabel>
                  <Select color="gray.500" placeholder="200">
                    <option value="option1">300</option>
                    <option value="option2">400</option>
                    <option value="option3">800</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <Flex justify={{ base: "center", md: "start" }} my="5">
                  <Link color="teal.500" as={NextLink} href="/admin/checkout">
                    <Button
                      minWidth={{ base: "100%", md: "auto" }}
                      colorScheme="brandBtn"
                    >
                      Crear una cuenta
                    </Button>
                    </Link>
                  </Flex>
                </FormControl>
              </Stack>

              <Text align="center" color="gray.500">
                <Link color="teal.500" as={NextLink} href="/login">
                  {" "}
                  Acceso
                </Link>
              </Text>
            </form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default Signup;
