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
    TableContainer,
    Table,
    TableCaption,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft} from "react-icons/hi";

  
  type HistoryProps = {};
  
  const History: React.FC<HistoryProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - Pass History" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card width={{base: "100%", md: "40rem"}}>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/users/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Historial de Accesos
                </Text>
              </VStack>
            </CardHeader>
            <CardBody>
            <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Visitante</Th>
        <Th>Fecha/Hora</Th>
        <Th>Residente</Th>
      </Tr>
    </Thead>
    <Tbody>
       
        {data.map((row) => (
             <Tr key={row.id}>
            <Td>{row.name}</Td>
            <Td>{row.time}</Td>
            <Td>{row.id}</Td>
            </Tr>
        ))}
      
        

     
     
     
    </Tbody>
    
  </Table>
</TableContainer>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default History;


  const data = [
    {
        id: "ID#1278",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#546",
        name: "Selena Alvarez",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#1278",
        name: "John Doe Sharma",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#6789",
        name: "Pedri Nicola",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#769",
        name: "Juan Felix",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#432",
        name: "Nicolas D Costa",
        time: "24/07/2023 | 10:54 Am",
        
    },
    {
        id: "ID#3214",
        name: "Arda Turan",
        time: "24/07/2023 | 10:54 Am",
        
    },


  ]
  