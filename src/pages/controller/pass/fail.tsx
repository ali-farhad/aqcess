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
  } from "@chakra-ui/react";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import NextLink from "next/link";
  import Navbar from "@/pages/components/Header/Navbar";
  import Seo from "@/pages/components/Header/Seo";
  
  import { HiChevronDoubleLeft } from "react-icons/hi";
  
  type FailProps = {};
  
  const Fail: React.FC<FailProps> = () => {
    return (
      <>
        <Seo pageTitle="Aqcess - Pass Fail" />
  
        <Navbar user={true} />
        <Container my={{ base: "12" }}>
          <Card>
            <CardHeader>
            <Stack align="center">
            <Box mb="2">
                    <Image
                      src="/logo_with_name.svg"
                      width={100}
                      height={100}
                      alt="site logo"
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/qrcode.svg"
                      width={150}
                      height={150}
                      alt="qrcode"
                    />
                  </Box>
                  </Stack>
            </CardHeader>
            <CardBody p="0" mt="5">
            <Card borderTopLeftRadius="3xl" borderTopRightRadius="3xl" bg="red.600" color="white" mt="4"  align="center" mx="auto">
                <CardBody>
                 <Flex justify="center" transform="translateY(-57px)">
                 <Image src="/pass_fail.svg" width={70} height={70} alt="Fail pass"/>
                 </Flex>
                <Stack spacing="4" align="start">
                    <Box>
                      <Text fontSize="sm">
                        Visitante
                      </Text>
                      <Text>Luis González García</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm">
                        Residente
                      </Text>
                      <Text>Alejandra Cortés B.</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm">
                        Fecha y Hora
                      </Text>
                      <Text>14-06-23 11:30am</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm">
                        Dirección
                      </Text>
                      <Text>Interior 12 Av. Juriquilla #201 cp 76230</Text>
                    </Box>

                    <Flex width="100%" direction="column" gap="5" justify={{ base: "center", md: "start" }}>
                       
                        <Button
                          width="100%"
                          mt="10"
                          bg="whiteAlpha.900"
                          color="red"
                        >
                          Ir al Inicio
                        </Button>
                      </Flex>

                  </Stack>
                </CardBody>
              </Card>
            
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  export default Fail;
  