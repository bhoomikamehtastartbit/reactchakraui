import { Box, Flex, Link, Button, Stack, Text, useColorModeValue, Container, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box 
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container maxW="container.xl">
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
          >
            Your Logo
          </Text>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={toggle}
          />

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={8}
            position={{ base: 'absolute', md: 'static' }}
            top="60px"
            left={0}
            ml={{ base: 0, md: 16 }}
            mr={{ base: 0, md: 8 }}
            bg={{ base: useColorModeValue('white', 'gray.800'), md: 'transparent' }}
            p={{ base: 4, md: 0 }}
          >
            <Link 
              as={RouterLink} 
              to="/" 
              fontSize="md"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                color: 'teal.500',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }}
            >
              Home
            </Link>
            <Link 
              as={RouterLink} 
              to="/about"
              fontSize="md"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                color: 'teal.500',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }}
            >
              About
            </Link>
            <Link 
              as={RouterLink} 
              to="/contact"
              fontSize="md"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                color: 'teal.500',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }}
            >
              Contact
            </Link>
            <Link 
              as={RouterLink} 
              to="/services"
              fontSize="md"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                color: 'teal.500',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }}
            >
              Services
            </Link>
            <Link 
              as={RouterLink} 
              to="/tables"
              fontSize="md"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'gray.200')}
              _hover={{
                color: 'teal.500',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              }}
            >
              Tables
            </Link>
          </Stack>

          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="md"
            fontWeight={600}
            color="white"
            bg="teal.500"
            href="#"
            _hover={{
              bg: 'teal.600',
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
          >
            Get Started
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;