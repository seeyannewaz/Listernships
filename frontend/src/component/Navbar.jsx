import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { ColorModeProvider, ColorModeButton } from "@/components/ui/color-mode"
import React from 'react'
import CreateUserModal from './CreateUserModal';

const Navbar = ({setUsers}) => {
    return <Container maxW={"1000px"} >
            <Box
                px={4}
                my={4}
                borderRadius={5} 
                bg={{base: "gray.200", _dark: "gray.700"}}           
            >
                <Flex h="16"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                >
                    {/* left side */}
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={3}
                        display={{base:"none", sm: "flex"}}
                    >
                        <img src="/medals.png" alt="Medal logo" width={50} height={50} />
                        <Text fontSize={"40px"}>+</Text>
                        <img src="/graduate.png" alt="Graduate logo" width={45} height={45} />
                        <Text fontSize={"40px"}>=</Text>
                        <img src="/employee.png" alt="Employee logo" width={60} height={60} />

                    </Flex>
                    {/* right side */}
                    <Flex gap={3} alignItems={"center"}>
                    <Text fontSize={"lg"} fontWeight={500} display={{base: "none", md: "block"}}>
                            Internships🥇
                    </Text>

                    <ColorModeProvider>
                    <Box 
                        borderWidth={1}     // Border width
                        borderRadius="sm"   // Rounded corners
                        borderColor="gray.100"  // Border color (can be changed for dark mode)
                        backgroundColor="gray.100" // Background color for the box
                        _dark={{
                        borderColor: "gray.600",
                        backgroundColor: "gray.600"
                        }} // Different styles for dark mode
                        display="inline-flex" // Center the button inside
                        alignItems="center" 
                        justifyContent="center"
                    >
                        <ColorModeButton borderWidth={1} borderRadius="sm"> 
                        </ColorModeButton>
                    </Box>
                    </ColorModeProvider>
                    <CreateUserModal setUsers={setUsers}/>
                    </Flex>
                </Flex>
            
            </Box>


    </Container>
};
export default Navbar