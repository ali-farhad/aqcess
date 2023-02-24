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
    TableContainer,
    Table,
    Th,
    Thead,
    Tr,
    Tbody,
    Td
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "../components/Header/Navbar";
  import Seo from "../components/Header/Seo";
  
  import { HiChevronDoubleLeft} from "react-icons/hi";

  
  type AmenitiesProps = {};
  
  const Amenities: React.FC<AmenitiesProps> = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedFile(event.target.files?.[0] || null);
    };
  
    return (
      <>
        <Seo pageTitle="Aqcess - Amenities" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card minW={{base: "100%", md:"40rem"}}>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/users/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Areas Comunes
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
            <Tabs>
                <TabList>
                    <Tab flex="1">Reservas Activas</Tab>
                    <Tab flex="1">Gestionar Areas Comunes</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Residente</Th>
        <Th>Fecha/Hora</Th>
        <Th>Area</Th>
      </Tr>
    </Thead>
    <Tbody>
       
        {data.map((row) => (
             <Tr key={row.name}>
            <Td>{row.name}</Td>
            <Td>{row.time}</Td>
            <Td>{row.area}</Td>
            </Tr>
        ))}
      
        

     
     
     
    </Tbody>
    
  </Table>
</TableContainer>
                </TabPanel>
                    <TabPanel>
                    <Card maxW="md" mx="auto">
                    <CardBody>
                        <Box my="2" bg="gray.500">
                            <Text p="1.5" align="center" color="white">Alberca #1</Text>
                        </Box>
                        <Text my="2">Disponibilidad</Text>
                        <VStack spacing="4">
                          
                                
                            {["Lunas", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map(
                        (item) => (
                            <HStack key={item} width="100%" spacing="2">
                            <Box p="1" flex="1" border="solid" borderColor="gray.300" borderWidth="thin">
                            <Text >{item}</Text>
                            </Box>
                            <Box p="1" flex="1" border="solid" borderColor="gray.300" borderWidth="thin">
                                <input  type="time"/>
                                </Box>
                                <Box p="1" flex="1" border="solid" borderColor="gray.300" borderWidth="thin">
                                <input type="time"/>
                                </Box>
                                </HStack> 
                           
                        )
                      )}
                                
                        </VStack>
                        <Box>
                    <Flex mt="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/users/home">
                      <Button
                        width="100%"
                        colorScheme="brandBtn"
                      >
                        Guardar Cambios
                      </Button>
                      </Link>
                    </Flex>
                  </Box>
                    </CardBody>
                    </Card>
                    
                    <form>
                    <FormControl my="4">
                    <FormLabel>Crear nueva Área</FormLabel>
                    <Input
                      type="text"
                      placeholder="Escribe el nombre de la amenidad"
                    />
                  </FormControl>

                  <Flex mt="5">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/users/home">
                      <Button
                        width="100%"
                        colorScheme="brandBtn"
                      >
                        Guardar Amenidad
                      </Button>
                      </Link>
                    </Flex>
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
  export default Amenities;
  

  const data = [
    {
        area: "Alberca 1",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Cancha",
        name: "Selena Alvarez",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Alberca 2",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Jacuzzi",
        name: "Pedri Nicola",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Alberca 1",
        name: "Juan Felix",
        time: "24/07/2023 | 10:54 Am",
        
    },
  
   


  ]
  