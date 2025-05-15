// Import required Chakra UI components and routing utilities
import { Box, Flex, Link, Button, Stack, Text, useColorModeValue, Container, IconButton } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    // Main navigation container with responsive styling
    <Box 
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Container maxW="container.xl">
        {/* Flex container for logo, navigation items, and CTA button */}
        <Flex 
          h={16} 
          alignItems="center" 
          justifyContent="space-between"
          borderBottomWidth="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          {/* Gradient Logo Text */}
          <Text
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
          >
            Your Logo
          </Text>

          {/* Mobile menu toggle button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={toggle}
          />

          {/* Navigation links container with responsive layout */}
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
            {/* Navigation Links with hover effects */}
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
            {/* Additional navigation links with same styling pattern */}
            {/* ... other navigation links ... */}
          </Stack>

          {/* Call-to-action button with hover and active animations */}
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="md"
            fontWeight={600}
            color="white"
            bg="teal.500"
            href="#"
            transition="all 0.3s ease"
            _hover={{
              bg: 'teal.600',
              transform: 'translateY(-2px) scale(1.05)',
              boxShadow: 'xl',
              transition: 'all 0.3s ease-in-out'
            }}
            _active={{
              transform: 'scale(0.95)',
              transition: 'all 0.1s ease-in-out'
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