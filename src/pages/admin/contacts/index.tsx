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
  IconButton,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "@/pages/components/Header/Navbar";
import Seo from "@/pages/components/Header/Seo";

import { HiChevronDoubleLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { RiAddLine } from "react-icons/ri";

type ContactsProps = {};

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <>
      <Seo pageTitle="Aqcess - Contactos" />

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
                Buscar contactos
              </Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray.300" />}
                />
                <Input type="text" placeholder="Buscar Residente" />
              </InputGroup>
            </VStack>

            <Link
              _hover={{ outline: "none" }}
              as={NextLink}
              href="/admin/contacts/add"
            >
              <Flex ml="auto !important">
                <Button
                  variant="solid"
                  mt="4"
                  ml="auto !important"
                  leftIcon={<RiAddLine />}
                  colorScheme="brandBtn"
                >
                  Add New
                </Button>
              </Flex>
            </Link>
          </CardHeader>
          <CardBody>
            <List spacing={3} mb="2">
              {data.map((p) => (
                <ListItem
                  key={p.id}
                  borderBottom="solid"
                  borderColor="gray.100"
                  pb="3"
                >
                  <HStack
                    spacing="5"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Avatar name={p.name} src="https://localhost" />
                    <Box mr="auto !important">
                      <Link as={NextLink} href="/admin/residents/person">
                        <Text>{p.name}</Text>
                      </Link>
                      <Text fontSize="sm">{p.mail}</Text>
                    </Box>
                    <Box ml="auto">
                      <IconButton
                        color="blue"
                        aria-label="Edit Contact"
                        icon={<TbEdit />}
                      />
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
export default Contacts;

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
];
