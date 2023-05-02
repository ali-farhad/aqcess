import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  FormControl,
  FormLabel, Input, Stack,
  Text,
  VStack,
  Link, HStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft } from "react-icons/hi";

  
  type AddProps = {};
  
  const Add: React.FC<AddProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - Resident Person" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/admin/contacts" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Nuevo contacto
                </Text>
                <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Escriba los detalles de su nuevo contacto
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
                     
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value="jds@aqcess.com" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Tipo de visita</FormLabel>
                    <Input type="text" placeholder="Familiar, Servicios, Amigo..." />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Teléfono</FormLabel>
                    <Input type="phone"  />
                  </FormControl>
  
                  <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} mt="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/admin/home">
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
  export default Add;
  