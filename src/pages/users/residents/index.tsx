import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Container, Input, Text,
    VStack,
    Link,
    InputGroup, HStack, InputLeftElement,
    List,
    ListItem,
    Avatar
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

  
  type ResidentsProps = {};
  
  const Residents: React.FC<ResidentsProps> = () => {
    
  
    
  
    return (
      <>
        <Seo pageTitle="Aqcess - Residents" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
            <HStack mb="1rem">
            <Link as={NextLink} href="/users/home" _hover={{outline: "none"}}>
            <Button leftIcon={<HiChevronDoubleLeft fontSize="1.5rem"  />} variant='outline'>Volver</Button>
            </Link>
            </HStack>
              <VStack spacing="1">
                <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Residentes
                </Text>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents='none'
                    children={<FiSearch color='gray.300' />}
                    />
                    <Input type='text' placeholder='Buscar Residente' />
                </InputGroup>
              </VStack>
            </CardHeader>
            <CardBody>
            <List spacing={3} mb="2">
                {data.map((p) =>(
                    <ListItem key={p.id} borderBottom="solid" borderColor="gray.300" pb="3">
                    <HStack spacing="5">
                    <Avatar name={p.name} src='https://localhost' />
                    <Box>
                    <Link as={NextLink} href="/users/residents/person"><Text>{p.name}</Text></Link>
                    <Text fontSize="sm">{p.mail}</Text>
                    </Box>
                    </HStack>
                    </ListItem>
                ))}
                              
                </List>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default Residents;
  
  const data = [
    {
        id: 1,
        name: "John Doe Sharma",
        mail: "Johndoe@mail.com",
    },
    {
        id: 2,
        name: "Rebbecca Moore",
        mail: "Johndoe@mail.com",
    },
    {
        id: 3,
        name: "Mia Nilson Adams",
        mail: "Johndoe@mail.com",
    },
    {
        id: 4,
        name: "Tatiana Sharma",
        mail: "Johndoe@mail.com",
    },
    {
        id: 5,
        name: "John Doe Sharma",
        mail: "Johndoe@mail.com",
    },

  ]