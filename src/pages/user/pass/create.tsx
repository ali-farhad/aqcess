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

  
  type CreateProps = {};
  
  const Create: React.FC<CreateProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - Create a Pass" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/admin/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Crear un Pase
                </Text>
                <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Ingresa la información del visitante o selecciona un contacto existente
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
                <HStack mb="2rem">
                <Divider orientation='horizontal'/>
                <Text align="center" minW="13rem">Información de la visita</Text>
                <Divider orientation='horizontal' />
                </HStack>
              <form>
                <Stack my="1" spacing="4">
                  <FormControl>
                    <FormLabel>Nombre completo*</FormLabel>
                    <Input
                      type="text"
                      placeholder="Escribe el nombre de tu visitante"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Escribe el Email de tu visitante" />
                  </FormControl>
  
                  <FormControl>
                    <Stack direction={{base:"column", md:"row"}} justify="space-between" spacing={8}>
                      <Box>
                      <Checkbox 
                        defaultChecked
                        size='lg' 
                        >Guardar en contactos</Checkbox>
                      </Box>
                      <Box>
                      <Checkbox 
                        defaultChecked
                        size='lg' 
                        >Pase permanente</Checkbox>
                      </Box>
                    </Stack>
                  </FormControl>

                  <FormControl>
                    <Stack direction={{base:"column", md:"row"}} my="3" justify="space-between" spacing={8}>
                      <Box>
                      <FormLabel>Hora de visita</FormLabel>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="time"
                        />
                      </Box>
                      <Box>
                      <FormLabel>Fecha de visita</FormLabel>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                        />
                      </Box>
                    </Stack>
                  </FormControl>
  
                  <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} my="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/user/pass">
                      <Button
                        minWidth="100%"
                        colorScheme="brandBtn"
                      >
                        Crear Pase
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
  export default Create;
  