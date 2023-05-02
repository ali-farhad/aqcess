import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Input,
  Text,
  VStack,
  Link,
  InputGroup,
  HStack,
  InputLeftElement,
  List,
  ListItem,
  Avatar,
  Checkbox,
  Stack,
  Flex,
  CheckboxGroup,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

type ApproveProps = {};

const Approve: React.FC<ApproveProps> = () => {
  return (
    <>
      <Seo pageTitle="Aqcess - Approve Users" />

      <Navbar user={true} />
      <Container my={{ base: "12" }}>
        <Card>
          <CardHeader>
            <HStack mb="1rem">
              <Link
                as={NextLink}
                href="/admin/home"
                _hover={{ outline: "none" }}
              >
                <Button
                  leftIcon={<HiChevronDoubleLeft fontSize="1.5rem" />}
                  variant="outline"
                >
                  Volver
                </Button>
              </Link>
            </HStack>
            <VStack spacing="1">
              <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium">
                Aprobar nuevos usuarios
              </Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray.300" />}
                />
                <Input type="text" placeholder="Buscar" />
              </InputGroup>
            </VStack>
          </CardHeader>
          <CardBody>
            <List spacing={3} mb="2">
              {data.map((p) => (
                <ListItem key={p.id} pb="3">
                  <Card bgColor="gray.100">
                    <CardBody>
                      <HStack gap={3}>
                        <Avatar
                          name={p.name}
                          src="https://bit.ly/tioluwani-kolawole"
                        />
                        <VStack alignItems="baseline" spacing="1">
                          <Text fontSize="lg" fontWeight="semibold">
                            {p.name}
                          </Text>
                          <Text fontSize="sm">{p.address}</Text>
                        </VStack>
                      </HStack>
                      <CheckboxGroup
                        colorScheme="green"
                        defaultValue={["Resident", "Checkpoint"]}
                      >
                        <Flex
                          justifyContent="space-between"
                          my="5"
                          direction="row"
                        >
                          <Checkbox value="" size="lg" colorScheme="blue">
                            <Text fontSize="sm">Resident</Text>
                          </Checkbox>
                          <Checkbox size="lg" colorScheme="blue">
                            <Text fontSize="sm">Checkpoint</Text>
                          </Checkbox>
                        </Flex>
                      </CheckboxGroup>
                      <VStack>
                        <Button minWidth="100%" colorScheme="brandBtn">
                        Aprobar
                        </Button>
                        <Button minWidth="100%" colorScheme="red">
                        Rechazar
                        </Button>
                      
                      </VStack>
                    </CardBody>
                  </Card>
                  {/* <HStack spacing="5">
                    <Avatar name={p.name} src='https://localhost' />
                    <Box>
                    <Link as={NextLink} href="/admin/residents/person"><Text>{p.name}</Text></Link>
                    <Text fontSize="sm">{p.mail}</Text>
                    </Box>
                    </HStack> */}
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default Approve;

const data = [
  {
    id: 1,
    name: "John Doe Sharma",
    mail: "Johndoe@mail.com",
    address: "Main Street 101",
  },
  {
    id: 2,
    name: "Rebbecca Moore",
    mail: "Johndoe@mail.com",
    address: "Main Street 102",
  },
  {
    id: 3,
    name: "Mia Nilson Adams",
    mail: "Johndoe@mail.com",
    address: "Main Street 103",
  },
  {
    id: 4,
    name: "Tatiana Sharma",
    mail: "Johndoe@mail.com",
    address: "Main Street 104",
  },
  {
    id: 5,
    name: "John Doe Sharma",
    mail: "Johndoe@mail.com",
    address: "Main Street 105",
  },
];
