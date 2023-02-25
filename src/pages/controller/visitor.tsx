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
    HStack,
    Divider,
    Checkbox,
    useCheckbox
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft} from "react-icons/hi";

  
  type visitorProps = {};
  
  const visitor: React.FC<visitorProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - register the visitor" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Registra un visitante
                </Text>
                <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Solicita la información a la persona que desea acceder
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
              <form>
                <Stack my="1" spacing="4">
                  <FormControl>
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input
                      type="text"
                      placeholder="Escribe el nombre del visitante"
                    />
                  </FormControl>

                  <FormControl>
                  <FormLabel>Persona que visita</FormLabel>
                    <Select color="gray.500" placeholder='Selecciona un residente'>
                        <option value='option1'>Name 1</option>
                        <option value='option2'>Name 2</option>
                        <option value='option3'>Name 3</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Razón de la visita</FormLabel>
                    <Input
                      type="text"
                      placeholder="Escribe la razón de la visita"
                    />
                  </FormControl>
  
                  <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} my="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/controller/home">
                      <Button
                        minWidth="100%"
                        mt="5"
                        colorScheme="brandBtn"
                      >
                        Guardar Registro
                      </Button>
                      </Link>
                    </Flex>
                  </FormControl>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default visitor;
  