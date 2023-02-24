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
                Detalles de pago
              </Text>
              <Text align="center" maxWidth="xs" fontSize="sm" color="gray.500">
                Cancela cuando quieras. Nuestros precios incluyen IVA.
              </Text>
            </VStack>
          </CardHeader>
          <CardBody>
            <form>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Nombre de la organización</FormLabel>
                  <Input
                    type="text"
                    placeholder="Escribe el nombre de la organización"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Añade el logo de tu organización</FormLabel>
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
                  <FormLabel>Nombre que aparece en la tarjeta</FormLabel>
                  <Input type="text" placeholder="Escribe el nombre" />
                </FormControl>

                <FormControl>
                  <FormLabel>Número de tarjeta</FormLabel>
                  <InputGroup>
                    <Input placeholder="Ingresa el número de tu tarjeta" />
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
                    <Button
                      minWidth={{ base: "100%", md: "auto" }}
                      colorScheme="brandBtn"
                    >
                      Contratar $3,500 por mes
                    </Button>
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
