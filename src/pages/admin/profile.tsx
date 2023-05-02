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
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    HStack,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "../components/Header/Navbar";
  import Seo from "../components/Header/Seo";
  
  import { SiVisa } from "react-icons/si";
  
  type ProfileProps = {};
  
  const Profile: React.FC<ProfileProps> = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFile(event.target.files?.[0] || null);
    };
  
    return (
      <>
        <Seo pageTitle="Aqcess - Profile" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Perfil
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
            <Tabs>
                <TabList>
                    <Tab flex="1">Detalles</Tab>
                    <Tab flex="1">Cuenta</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <form>
                            <Stack spacing="4">
                            <FormControl>
                                <FormLabel>Nombre Completo</FormLabel>
                                    <Input
                                    type="text"
                                    placeholder="Escribe nombre completo"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>Email</FormLabel>
                                    <Input
                                    type="email"
                                    placeholder="Escribe Email"
                                    />
                                </FormControl>


                                <FormControl>
                                <FormLabel>Teléfono</FormLabel>
                                    <Input
                                    type="text"
                                    placeholder="Escribe el teléfono"
                                    />
                                </FormControl>


                                <Box my="12">
                                <FormControl mt="10">
                                <FormLabel>Contraseña actual</FormLabel>
                                    <Input
                                    type="password"
                                    placeholder="Escriba su contraseña actual"
                                    />
                                </FormControl>
                                <FormControl mt="4">
                                <FormLabel>Nueva contraseña</FormLabel>
                                    <Input
                                    type="password"
                                    placeholder="Escriba su nueva contraseña"
                                    />
                                </FormControl>

                                
                                </Box>

                              
                  <Box></Box>
                  <FormControl mt="12">
                    <Flex justify={{ base: "center", md: "start" }} mt="12">
                      <Button
                        minWidth="100%"
                        colorScheme="brandBtn"
                      >
                        Guardar Cambios
                      </Button>
                    </Flex>
                  </FormControl>


                                
                            </Stack>
                        </form>
                </TabPanel>
                    <TabPanel>
                    <form>
                            <Stack spacing="4">
                            <FormControl>
                                <FormLabel>Nombre de la cuenta</FormLabel>
                                    <Input
                                    type="text"
                                    placeholder="Nombre del complejo"
                                    />
                                </FormControl>

                                
                    <FormControl>
                    <FormLabel>Cambiar el logotipo de su empresa</FormLabel>
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
                      haga clic aquí para agregar una 
                        <Button
                          fontSize="sm"
                          fontWeight="sm"
                          pl="1"
                          variant="link"
                          color="blue.500"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          {" "}
                          imagen
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
                  <FormLabel>Método de pago</FormLabel>
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
                  <HStack>
                  <Text>Next Billing Cycle:</Text>
                  <Text color="blue">May 15 2023</Text>
                  </HStack>
                </FormControl>

                              

                                <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} mt="12">
                    <Link as={NextLink} href="/admin/home">
                      <Button
                        minWidth="100%"
                        colorScheme="brandBtn"
                      >
                        Guardar Cambios
                      </Button>
                      </Link>
                    </Flex>
                  </FormControl>
                                </Stack>
                    </form>
                    </TabPanel>
            </TabPanels>
            </Tabs>
              
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default Profile;
  