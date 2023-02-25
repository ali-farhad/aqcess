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
  useCheckbox,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import NextLink from "next/link";
import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft } from "react-icons/hi";

type PassProps = {};

const Pass: React.FC<PassProps> = () => {
  return (
    <>
      <Seo pageTitle="Aqcess - Pass" />

      <Navbar user={true} />
      <Container my={{ base: "12" }}>
        <Card bg="blue.500" color="white">
          <CardHeader>
          <HStack mb="1rem">
            <Link as={NextLink} href="/admin/home" _hover={{outline: "none"}}>
            <Button _hover={{color: "black"}} leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
            <Card mt="4" maxW="80%" align="center" mx="auto">
              <CardBody>
                <Stack align="center">
                <Box mb="2">
                  <Image
                    src="/logo_with_name.svg"
                    width={100}
                    height={100}
                    alt="site logo"
                    
                  />
                </Box>
                <Box>
                  <Image
                    src="/qrcode.svg"
                    width={150}
                    height={150}
                    alt="qrcode"
            
                  />
                </Box>
                </Stack>
                <Stack spacing="2" align="start">
                  <Box>
                    <Text fontSize="sm" color="blue.600">
                      Visitante
                    </Text>
                    <Text>Luis González García</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="blue.600">
                      Residente
                    </Text>
                    <Text>Alejandra Cortés B.</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="blue.600">
                      Fecha y Hora
                    </Text>
                    <Text>14-06-23 11:30am</Text>
                  </Box>
                  <Box>
                    <Text fontSize="sm" color="blue.600">
                      Dirección
                    </Text>
                    <Text>Interior 12 Av. Juriquilla #201 cp 76230</Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </CardHeader>
          <CardBody>

            <Stack align="center">
              <Text align="center">Para acceder se deberá válidar el código bidimensional QR ya sea en papel o en pantalla en el carril designado a visitantes con el personal de seguridad.</Text>
              <Text align="center">
              El mal uso de esta invitación es responsabilidad del anfitrión y será sancionado por ello.
              </Text>
            </Stack>

            <Flex direction="column" gap="5" justify={{ base: "center", md: "start" }} my="5">
                      <Button
                        minWidth="100%"
                        bg="whiteAlpha.900"
                        color="black"
                      >
                        Enviar Pase
                      </Button>
                      <Button
                        minWidth="100%"
                        bg="whiteAlpha.900"
                        color="black"
                      >
                        Volver al Incio
                      </Button>
                    </Flex>
           
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default Pass;
