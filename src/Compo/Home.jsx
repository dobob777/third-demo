import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Flex>
                <Box w="250px" h="100vh" bg="blue.500" color="white" p={ 4 }>
                    <Heading size="lg" mb={ 4 }>Dashboard</Heading>
                    <VStack spacing={ 2 }>
                        <Box>Home</Box>
                        <Box>Analytics</Box>
                        <Box>Settings</Box>
                    </VStack>
                </Box>
                <Box flex="1" p={ 4 }>
                    <Heading size="lg">Welcome to the Dashboard</Heading>
                    {/* Add your dashboard content here */ }
                </Box>
            </Flex>
        </div>
    )
}

export default Home
