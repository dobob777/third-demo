import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <Box p={ 4 }>
                <Heading size="lg" mb={ 4 }>About Us</Heading>
                <Text>
                    Welcome to our website! We are a passionate team dedicated to providing high-quality products and services to our customers.
                </Text>
                <Text mt={ 2 }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor et nulla faucibus tempus. Mauris in sapien ac elit consectetur congue.
                </Text>
                {/* Add more content about your company/organization here */ }
            </Box>
        </div>
    )
}

export default About
