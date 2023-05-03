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
    Td,
    Image,
    TableCaption,
    Spacer,
    Checkbox,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import { HiChevronDoubleLeft} from "react-icons/hi";
import Navbar from './../../components/Header/Navbar';
import Seo from './../../components/Header/Seo';

  
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
            <Link as={NextLink} href="/admin/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Reservar Comodidad
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
            <Tabs>
                <TabList>
                    <Tab flex="1">Reservaciones</Tab>
                    <Tab flex="1">Administrar</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                <VStack align="start" spacing="5">
                  <Box w="100%" h="200px" maxH="50%">
                      <Text mb="1" fontWeight="bold">Pool Zone</Text>
                      <Image w="100%" h="100%" objectFit="cover" src="/pool.png" borderRadius="lg"/>
                  </Box>
                <div></div>
                  </VStack>
                  <div></div>
                  <Box>
                  <Text my="5" fontWeight="bold">Active Bookings</Text>


<TableContainer>
<Table variant='simple'>
<Thead>
<Tr>
<Th>Nombre del servicio</Th>
<Th>Hora y fecha</Th>
</Tr>
</Thead>
<Tbody>
{data.map(row => (
<Tr key={row.name}>


<Td>{row.area}</Td>
<Td>{row.time}</Td>
</Tr>
))}

</Tbody>
</Table>
</TableContainer>



                  </Box>
                </TabPanel>
                    <TabPanel>
  
                    <form>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Crear una amenidad</FormLabel>
                  <Input
                    type="text"
                    placeholder="Escribe el nombre"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Añade una imagen</FormLabel>
                  <VStack
                    py="3"
                    border="dashed"
                    borderColor="gray.200"
                    borderWidth="medium"
                  >
                    <Image
                      src="/upload.png"
                      w="8%"
                      h="8%"
                      alt="upload icon"
                    />
                    <Text color="gray.500" fontSize="sm">
                    haga clic para agregar una 
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
                  
                  <Flex alignItems="center" gap="2">
                    
                      <Text w="100%" border="1px" borderColor="gray.200" p="2" borderRadius="md">de lunes a viernes</Text>
                      <Input type="Time" placeholder="CVV" />
                      <Input type="Time" placeholder="CVV" />
                    
                  
                  </Flex>
                  <Flex my="2" alignItems="center" gap="2">
                    
                      <Text w="100%" border="1px" borderColor="gray.200" p="2" borderRadius="md">Sábado</Text>
                      <Input type="Time" placeholder="CVV" />
                      <Input type="Time" placeholder="CVV" />
                    
                  
                  </Flex>

                  <Flex my="2" alignItems="center" gap="2">
                    
                    <Text w="100%" border="1px" borderColor="gray.200" p="2" borderRadius="md">Domingo</Text>
                    <Input type="Time" placeholder="CVV" />
                    <Input type="Time" placeholder="CVV" />
                
                </Flex>
                </FormControl>

                <FormControl>
                  <Checkbox value="" size="lg" colorScheme="blue">
                            <Text fontSize="sm">Publicar Amenidad</Text>
                          </Checkbox>
                  </FormControl>



                <FormControl>
                  <Flex justify={{ base: "center", md: "start" }} my="10">
                  <Link as={NextLink} href="/admin/home">
                    <Button
                      minWidth={{ base: "100%", md: "auto" }}
                      colorScheme="brandBtn"
                    >
                      Guardar cambios
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
  export default Amenities;
  

  const data = [
    {
        area: "Pool Zone",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Asadores",
        name: "Selena Alvarez",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Pool 3",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Pool 4",
        name: "Pedri Nicola",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        area: "Pool 5",
        name: "Juan Felix",
        time: "24/07/2023 | 10:54 Am",
        
    },
  
   


  ]
  