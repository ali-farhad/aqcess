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
    TabPanel
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
                    <Tab flex="1">Información</Tab>
                    <Tab flex="1">Cambiar Contraseña</Tab>
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
                                <FormLabel>Address</FormLabel>
                                    <Input
                                    type="text"
                                    placeholder="Escribe Dirección"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>Teléfono</FormLabel>
                                    <Input
                                    type="text"
                                    placeholder="Escribe el teléfono"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>Rol</FormLabel>
                                    <Input
                                    disabled
                                    variant="filled"
                                    type="text"
                                    value="Controller"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>ID</FormLabel>
                                    <Input
                                    disabled
                                    variant="filled"
                                    type="text"
                                    value="124"
                                    />
                                </FormControl>

                               
                  <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} my="5">
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
                                <FormLabel>Contraseña anterior</FormLabel>
                                    <Input
                                    type="password"
                                    placeholder="Escribe aquí tu contraseña anterior"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>Nueva Contraseña</FormLabel>
                                    <Input
                                    type="password"
                                    placeholder="Escribe aquí tu nueva contraseña"
                                    />
                                </FormControl>

                                <FormControl>
                                <FormLabel>Confirmar Contraseña nueva</FormLabel>
                                    <Input
                                    type="password"
                                    placeholder="Confirma tu nueva contraseña"
                                    />
                                </FormControl>

                                <FormControl>
                    <Flex justify={{ base: "center", md: "start" }} my="5">
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
            </TabPanels>
            </Tabs>
              
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default Profile;
  