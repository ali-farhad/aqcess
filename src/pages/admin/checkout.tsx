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
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import NextLink from "next/link";
import Navbar from "../components/Header/Navbar";
import Seo from "../components/Header/Seo";

import { SiVisa } from "react-icons/si";

type CheckoutProps = {};

const Checkout: React.FC<CheckoutProps> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  return (
    <>
      <Seo pageTitle="Aqcess - Checkout" />

      <Navbar user={true} />
      <Container my={{ base: "12" }}>
        <Card>
          <CardHeader>
            <VStack spacing="1">
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
              Verificar
              </Text>
              <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
              Cancelar cuando sea
              </Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <form>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Nombre del apartamento o complejo de viviendas</FormLabel>
                  <Input
                    type="text"
                    placeholder="Escriba el nombre complejo"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Agregar un logotipo</FormLabel>
                  <VStack
                    py="3"
                    border="dashed"
                    borderColor="gray.200"
                    borderWidth="medium"
                  >
                    <Image
                      src="/upload.png"
                      width={40}
                      height={40}
                      alt="upload icon"
                    />
                    <Text color="gray.500" fontSize="sm">
                      Para añadir una imagen
                      <Button
                        fontSize="sm"
                        fontWeight="sm"
                        pl="1"
                        variant="link"
                        color="blue.500"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        {" "}
                        Da clíc aquí
                      </Button>
                    </Text>
                    <Input
                      type="file"
                      hidden
                      ref={fileInputRef}
                      onChange={handleFileSelection}
                    />
                  </VStack>
                </FormControl>

                <FormControl>
                  <FormLabel>Nombre del tarjetahabiente</FormLabel>
                  <Input type="text" placeholder="Escriba el nombre del titular de la tarjeta" />
                </FormControl>

                <FormControl>
                  <FormLabel>Números en la tarjeta</FormLabel>
                  <InputGroup>
                    <Input placeholder="XXXX XXXX XXXX 7890" />
                    <InputRightElement
                      color="brandBtn.600"
                      mx="10px"
                      children={<SiVisa fontSize="2rem" />}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <Stack direction="row" spacing={8}>
                    <Box>
                      <FormLabel>CVV</FormLabel>
                      <Input type="text" placeholder="CVV" />
                    </Box>
                    <Box>
                      <FormLabel>Expira</FormLabel>
                      <Input type="text" placeholder="MM/AA" />
                    </Box>
                  </Stack>
                </FormControl>

                <FormControl>
                  <Flex justify={{ base: "center", md: "start" }} my="5">
                  <Link as={NextLink} href="/admin/home">
                    <Button
                      minWidth={{ base: "100%", md: "auto" }}
                      colorScheme="brandBtn"
                    >
                      Paga 2500mxn
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
export default Checkout;
