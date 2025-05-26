// Import required Chakra UI components and icons
import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Button, Stack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FiHome, FiUsers, FiSettings, FiDatabase, FiCheck } from 'react-icons/fi';

function Home() {
  // Feature cards data with icons and descriptions
  const features = [
    { icon: FiHome, title: 'Feature 1', description: 'Description for feature 1' },
    { icon: FiUsers, title: 'Feature 2', description: 'Description for feature 2' },
    { icon: FiSettings, title: 'Feature 3', description: 'Description for feature 3' },
    { icon: FiDatabase, title: 'Feature 4', description: 'Description for feature 4' },
  ];

  // Pricing plans configuration with features and pricing details
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        '1 User Account',
        'Basic Features',
        'Email Support',
        '1GB Storage'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$29.99',
      features: [
        '5 User Accounts',
        'Advanced Features',
        'Priority Support',
        '10GB Storage',
        'Custom Integrations'
      ],
      isPopular: true,
      buttonText: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      features: [
        'Unlimited Users',
        'All Features',
        '24/7 Support',
        'Unlimited Storage',
        'Custom Solutions',
        'Dedicated Manager'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="teal.500" color="white" py={20}>
        <Container maxW="container.xl">
          <Heading size="2xl" mb={4}>Welcome to Our Website</Heading>
          <Text fontSize="xl" mb={8}>Discover amazing features and possibilities</Text>
          <Button colorScheme="whiteAlpha">Get Started</Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* Render feature cards dynamically */}
          {features.map((feature, index) => (
            <VStack key={index} align="start" p={6} bg="gray.50" borderRadius="lg">
              <Icon as={feature.icon} w={10} h={10} color="teal.500" />
              <Heading size="md">{feature.title}</Heading>
              <Text>{feature.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Pricing Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.xl">
          {/* Pricing Header */}
          <VStack spacing={8} mb={12}>
            <Heading size="2xl">Pricing Plans</Heading>
            <Text fontSize="xl" textAlign="center">
              Choose the perfect plan for your needs
            </Text>
          </VStack>

          {/* Pricing Cards Grid */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Render pricing plan cards dynamically */}
            {pricingPlans.map((plan, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="lg"
                position="relative"
                transform={plan.isPopular ? 'scale(1.05)' : 'none'}
                zIndex={plan.isPopular ? 1 : 0}
                transition="all 0.3s ease"
                _hover={{ transform: 'translateY(-8px)' }}
              >
                {/* Popular Plan Badge */}
                {plan.isPopular && (
                  <Box
                    position="absolute"
                    top="-4"
                    right="-4"
                    bg="teal.500"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Popular
                  </Box>
                )}
                {/* Plan Details */}
                <VStack spacing={5} align="stretch">
                  <Heading size="lg">{plan.name}</Heading>
                  <Stack spacing={1}>
                    <Text fontSize="4xl" fontWeight="bold">
                      {plan.price}
                    </Text>
                    <Text color="gray.500">per month</Text>
                  </Stack>
                  {/* Plan Features List */}
                  <List spacing={3}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} display="flex" alignItems="center">
                        <ListIcon as={FiCheck} color="teal.500" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  {/* Call-to-action Button */}
                  <Button
                    colorScheme={plan.isPopular ? 'teal' : 'gray'}
                    size="lg"
                    w="full"
                    mt={4}
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg'
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;