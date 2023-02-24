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

  
  type PersonProps = {};
  
  const Person: React.FC<PersonProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - Resident Person" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/users/residents" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Información del residente
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
                      placeholder="Escribe el nombre de tu visitante"
                      value="John Doe Sharma"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value="jds@aqcess.com" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" value="Av Principal #17" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Teléfono</FormLabel>
                    <Input type="phone" value="+52-442668-7402" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Rol</FormLabel>
                    <Input type="text" value="Residente" />
                  </FormControl>
  
                 <FormControl>
                    <FormLabel>ID</FormLabel>
                    <Input type="text" value="124" />
                  </FormControl>
  
  
                 

                 
  
                  <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} mt="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/users/home">
                      <Button
                        width="100%"
                        colorScheme="brandBtn"
                      >
                        Guardar Cambios
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
  export default Person;
  