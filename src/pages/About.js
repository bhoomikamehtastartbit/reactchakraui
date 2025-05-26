// Import required Chakra UI components
import { Box, Container, Heading, Text, Image, Stack, SimpleGrid } from '@chakra-ui/react';

function About() {
  return (
    // Main container with maximum width and vertical padding
    <Container maxW="container.xl" py={10}>
      <Stack spacing={10}>
        {/* Header Section */}
        <Box textAlign="center">
          <Heading mb={4}>About Us</Heading>
          <Text fontSize="lg">Learn more about our company and mission</Text>
        </Box>

        {/* About Content Section - Image and Story */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
          {/* Image Container */}
          <Box flex={1}>
            <Image
              src="https://via.placeholder.com/500"
              alt="About Us"
              borderRadius="lg"
              fallbackSrc="https://via.placeholder.com/500"
              bg="teal.100"
              objectFit="cover"
              boxShadow="lg"
              width="100%"
              height="400px"
            />
          </Box>
          {/* Story Content */}
          <Box flex={1}>
            <Heading size="lg" mb={4}>Our Story</Heading>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </Stack>

        {/* Company Values Section */}
        <Box>
          <Heading size="lg" mb={6} textAlign="center">Our Values</Heading>
          {/* Responsive grid for value cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Map through values to create individual cards */}
            {['Innovation', 'Integrity', 'Excellence'].map((value) => (
              <Box key={value} p={6} bg="gray.50" borderRadius="lg" textAlign="center">
                <Heading size="md" mb={4}>{value}</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}

export default About;