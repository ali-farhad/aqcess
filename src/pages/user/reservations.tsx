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
        <Seo pageTitle="Aqcess - Reservations" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card minW={{base: "100%", md:"40rem"}}>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/user/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Reservaciones
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
            <Tabs>
                <TabList>
                    <Tab flex="1">Mis reservaciones</Tab>
                    <Tab flex="1">Reservar Área</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Areas</Th>
        <Th>Fecha/Hora</Th>
      </Tr>
    </Thead>
    <Tbody>
       
        {data.map((row) => (
             <Tr key={row.name}>
            <Td>{row.area}</Td>
            <Td>{row.time}</Td>
            </Tr>
        ))}
      
        

     
     
     
    </Tbody>
    
  </Table>
</TableContainer>
                </TabPanel>
                    <TabPanel>
                    <form>
                    <FormControl mt="3">
                <FormLabel>Selecciona el área a reservar</FormLabel>
                <Select color="gray.500" placeholder='Selecciona Aquí'>
  <option value='option1'>Pool 1</option>
  <option value='option2'>Pool 2</option>
  <option value='option3'>Pool 3</option>
</Select>
              </FormControl>

              <FormControl>
                    <Stack my="4" direction={{base:"column", md:"row"}} justify="space-between" spacing={8}>
                      <Box>
                        <Input type="time" />
                      </Box>
                      <Box>
                        <Input type="date" />
                    </Box>
                    </Stack>
                  </FormControl>

                  <Flex mt="8">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/user/home">
                      <Button
                        width="100%"
                        colorScheme="brandBtn"
                      >
                        Reservar Ahora
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
  