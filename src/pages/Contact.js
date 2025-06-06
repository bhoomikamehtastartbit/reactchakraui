// Import required Chakra UI components and icons
import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Box,
  useToast as ChakraToast,
  Text,
  SimpleGrid,
  Icon,
  useColorModeValue,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Contact() {
  // Initialize form state with empty values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const toast = ChakraToast();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message using toast
    toast({
      title: 'Message sent!',
      description: 'We will get back to you soon.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    // Main container with maximum width and padding
    <Container maxW="container.xl" py={10}>
      {/* Two-column grid layout for contact info and form */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Left column - Contact Information */}
        <VStack spacing={8} align="stretch">
          {/* Header Section */}
          <Box>
            <Heading 
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="bold"
            >
              Get in Touch
            </Heading>
            <Text 
              mt={4} 
              color={useColorModeValue('gray.600', 'gray.200')}
              fontSize="lg"
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Text>
          </Box>

          {/* Contact Information Cards */}
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
            {/* Phone Information */}
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={PhoneIcon} w={6} h={6} color="teal.500" />
              <Text mt={2} fontWeight="bold">Phone</Text>
              <Text color={useColorModeValue('gray.600', 'gray.200')}>+1 (555) 123-4567</Text>
            </Box>
            {/* Email Information */}
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={EmailIcon} w={6} h={6} color="teal.500" />
              <Text mt={2} fontWeight="bold">Email</Text>
              <Text color={useColorModeValue('gray.600', 'gray.200')}>contact@example.com</Text>
            </Box>
            {/* Address Information */}
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Icon as={InfoIcon} w={6} h={6} color="teal.500" />
              <Text mt={2} fontWeight="bold">Address</Text>
              <Text color={useColorModeValue('gray.600', 'gray.200')}>123 Business Street, Suite 100, City, State 12345</Text>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Right column - Contact Form */}
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          borderWidth="1px"
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={5}>
              {/* Name Input Field */}
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<Icon as={InfoIcon} color="gray.300" />} />
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                    bg={useColorModeValue('gray.50', 'gray.600')}
                    border="none"
                    _focus={{
                      bg: useColorModeValue('white', 'gray.800'),
                      boxShadow: 'outline'
                    }}
                  />
                </InputGroup>
              </FormControl>

              {/* Email Input Field */}
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<EmailIcon color="gray.300" />} />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@example.com"
                    bg={useColorModeValue('gray.50', 'gray.600')}
                    border="none"
                    _focus={{
                      bg: useColorModeValue('white', 'gray.800'),
                      boxShadow: 'outline'
                    }}
                  />
                </InputGroup>
              </FormControl>

              {/* Subject Input Field */}
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="Message subject"
                  bg={useColorModeValue('gray.50', 'gray.600')}
                  border="none"
                  _focus={{
                    bg: useColorModeValue('white', 'gray.800'),
                    boxShadow: 'outline'
                  }}
                />
              </FormControl>

              {/* Message Textarea */}
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Your message"
                  size="lg"
                  rows={6}
                  bg={useColorModeValue('gray.50', 'gray.600')}
                  border="none"
                  _focus={{
                    bg: useColorModeValue('white', 'gray.800'),
                    boxShadow: 'outline'
                  }}
                />
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                width="100%"
                mt={4}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default Contact;