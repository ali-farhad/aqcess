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
import {FcContacts} from "react-icons/fc";

  
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

            <FormControl>
  <FormLabel>Seleccionar de Mis contactos</FormLabel>
  <Select  icon={<FcContacts />} bg="blue" color="white" placeholder='Seleccione Contactos'>
    <option style={{ color: 'black' }}>Contact 1</option>
    <option style={{ color: 'black' }}>Contact 2</option>
  </Select>
</FormControl>


                <HStack my="1rem">
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
                  <Checkbox value="" size="lg" colorScheme="blue">
                            <Text fontSize="sm">Guardar contacto</Text>
                          </Checkbox>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Razón de la visita</FormLabel>
                    <Input type="text" placeholder="Ejemplo: visita familiar" />
                  </FormControl>

                  <FormControl>
                  <Checkbox value="" size="lg" colorScheme="blue">
                            <Text fontSize="sm">Es este un pase permanente?</Text>
                          </Checkbox>
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
                      <Link _hover={{outline: "none"}} as={NextLink} href="/admin/pass">
                      <Button
                        minWidth={{ base: "100%", md: "auto" }}
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
  