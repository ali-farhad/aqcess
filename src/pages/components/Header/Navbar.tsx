import {Box,
Button,
ButtonGroup,
Container,
Flex,
HStack,
IconButton,
useBreakpointValue,
Text,
Collapse,
useDisclosure,
Link,
Avatar
} from "@chakra-ui/react";



import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import NextLink from 'next/link'





type NavbarProps = {
    user: boolean
};

const Navbar:React.FC<NavbarProps> = ({user} : NavbarProps) => {

    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const { isOpen, onToggle } = useDisclosure();



    
    
    
    return (
        <>
         <Box as="section">
          <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container maxW="100%" py={{ base: "4", lg: "5" }}>
              <HStack spacing="10" justify="space-between">
               
                  <Link href="/">
                  <HStack spacing="13px">
                  <Image
                    src="/logo.png"
                    width={30}
                    height={30}
                    alt="site logo"
                  />
                  <Text fontSize="lg" fontWeight="semibold">
                    Aqcess
                  </Text>
                  </HStack>
                  </Link>
                
                {isDesktop ? (
                  <Flex justify="space-between" flex="1">
                    <ButtonGroup variant="link" spacing="8">
                      {["Product", "Features", "Pricing", "Contact"].map(
                        (item) => (
                          <Button key={item}>{item}</Button>
                        )
                      )}
                    </ButtonGroup>
                    {!user && (
                       <HStack spacing="3">
                       <Button variant="ghost">
                       <Link
                          _hover={{
                             textDecoration: "none"
                          }}
                          as={NextLink} href="/login"
                         
                         >Sign In</Link>
                       </Button>
                       <Button colorScheme="brandBtn">
                         <Link
                          _hover={{
                             textDecoration: "none"
                          }}
                          className="btnLink" as={NextLink} href="/signup"
                         
                         >Sign Up</Link>
                       </Button>
                     </HStack>
                    )}

                    {user && (
                      <Box>
                            <Link as={NextLink} href="/users/profile" _hover={{outline: "none"}}>
                            <Avatar bg="brandBtn.500" color="white" cursor="pointer"  name='Ali Farhad' src='#' />
                            </Link>

                      </Box>
                    )}
                   
                  </Flex>
                ) : (
                  <IconButton
                    variant="ghost"
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                    onClick={onToggle}
                  />
                )}
              </HStack>
            </Container>
          </Box>
          {/* Mobile NAV */}
          {!isDesktop && (
             <Collapse in={isOpen} animateOpacity>
             <Box bg="bg-surface" boxShadow="sm">
             <Flex direction="column" gap="4" py="20px">
                      
                         {["Product", "Features", "Pricing", "Contact"].map(
                           (item) => (
                             <Button variant="link" key={item}>{item}</Button>
                           )
                         )}
                      
                      
                         <Button variant="ghost">
                         <Link
                         _hover={{
                            textDecoration: "none"
                         }}
                         as={NextLink} href="/login"
                        
                        >Sign In</Link>
                         </Button>
                         <Button colorScheme="brandBtn">
                        <Link
                         _hover={{
                            textDecoration: "none"
                         }}
                         className="btnLink" as={NextLink} href="/signup"
                        
                        >Sign Up</Link>
                      </Button>
                     </Flex>
                 </Box>
                 </Collapse>
          )}
         
        </Box>

        </>
    )
}
export default Navbar;