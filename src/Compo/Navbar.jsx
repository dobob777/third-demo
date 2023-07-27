import { Box, Center, Flex, Image, Spacer, Square, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../logoD.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Box bg='black' w='100%' p={ 4 } color='white'>
                <Flex>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={ Logo }
                        alt='Dan Abramov'
                    />
                    <Spacer />
                    <Flex color='white'>
                        <Center px={ 3 } py={ 1 } mx={ 3 }>
                            <Link to={ '/' }>
                                <Text>
                                    Home
                                </Text>
                            </Link>
                        </Center>
                        <Center px={ 3 } py={ 1 } mx={ 3 }>
                            <Link to={ '/faqs' }>
                                <Text>
                                    FAQs
                                </Text>
                            </Link>
                        </Center>
                        <Center px={ 3 } py={ 1 } mx={ 3 }>
                            <Link to={ '/about' }>
                                <Text>
                                    About
                                </Text>
                            </Link>
                        </Center>
                        <Center px={ 3 } py={ 1 } mx={ 3 }>
                            <Link to={ '/contact' }>
                                <Text>
                                    Contact
                                </Text>
                            </Link>
                        </Center>
                    </Flex>
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
