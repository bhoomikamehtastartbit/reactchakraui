import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Button } from '@chakra-ui/react';
import { FiHome, FiUsers, FiSettings, FiDatabase } from 'react-icons/fi';

function Home() {
  const features = [
    { icon: FiHome, title: 'Feature 1', description: 'Description for feature 1' },
    { icon: FiUsers, title: 'Feature 2', description: 'Description for feature 2' },
    { icon: FiSettings, title: 'Feature 3', description: 'Description for feature 3' },
    { icon: FiDatabase, title: 'Feature 4', description: 'Description for feature 4' },
  ];

  return (
    <Box>
      <Box bg="teal.500" color="white" py={20}>
        <Container maxW="container.xl">
          <Heading size="2xl" mb={4}>Welcome to Our Website</Heading>
          <Text fontSize="xl" mb={8}>Discover amazing features and possibilities</Text>
          <Button colorScheme="whiteAlpha">Get Started</Button>
        </Container>
      </Box>

      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <VStack key={index} align="start" p={6} bg="gray.50" borderRadius="lg">
              <Icon as={feature.icon} w={10} h={10} color="teal.500" />
              <Heading size="md">{feature.title}</Heading>
              <Text>{feature.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Home;