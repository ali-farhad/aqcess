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
    Spacer
  } from "@chakra-ui/react";
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
                    <Tab flex="1">Nueva reserva</Tab>
                    <Tab flex="1">Mis reservas</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                <VStack align="start" spacing="5">
                 <Text>
                  Select the aminty you wish to book
                  </Text>
                  <Box w="100%" h="200px" maxH="50%">
                      <Text mb="1" fontWeight="bold">Pool Zone</Text>
                      <Image w="100%" h="100%" objectFit="cover" src="/pool.png" borderRadius="lg"/>
                  </Box>
                  <Spacer/>
                  <FormControl my="2" display="block">
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      <FormLabel>Tiempo de reserva</FormLabel>
                      <Input type="time"/>
                    </Box>
                    <Box>
                      <FormLabel>Fecha para registrarse</FormLabel>
                      <Input type="date" />
                    </Box>
                  </Stack>
                </FormControl>
                <Flex justify={{ base: "center", md: "center" }} mt="1">
                  <Link as={NextLink} href="/admin/home">
                    <Button
                      minWidth={{ base: "100%", md: "auto" }}
                      colorScheme="brandBtn"
                    >
                      Reservar ahora
                    </Button>
                    </Link>
                  </Flex>
                  </VStack>
                </TabPanel>
                    <TabPanel>
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
                    <form>
                  <Flex mt="16">
                      <Link width="100%" _hover={{outline: "none"}} as={NextLink} href="/admin/home">
                      <Button
                        width="100%"
                        colorScheme="brandBtn"
                      >
                      Ir al Inicio
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
  