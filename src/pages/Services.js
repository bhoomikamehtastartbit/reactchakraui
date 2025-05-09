import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
  useColorModeValue,
  Flex,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Card,
  CardBody,
  Stack
} from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon, TimeIcon, SettingsIcon } from '@chakra-ui/icons';

function Services() {
  // Service cards data with title, description, icon, and features
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: StarIcon,
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: SettingsIcon,
      features: ['Cross Platform', 'User Friendly', 'Offline Support']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      icon: TimeIcon,
      features: ['Auto Scaling', 'High Availability', 'Security']
    }
  ];

  // Statistics data for metrics display
  const stats = [
    { label: 'Active Users', number: '10K+', growth: '+25% from last month' },
    { label: 'Projects Completed', number: '500+', growth: '+12% from last quarter' },
    { label: 'Success Rate', number: '99%', growth: '+5% from last year' }
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={16}>
        {/* Hero Section - Main heading with gradient text */}
        <Box textAlign="center" w="full">
          <Heading
            bgGradient="linear(to-r, teal.400, blue.500)"
            bgClip="text"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            mb={4}
          >
            Our Services
          </Heading>
          {/* Subheading with responsive color */}
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.200')}>
            Discover how we can help transform your business
          </Text>
        </Box>

        {/* Statistics Section - Display key metrics in cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          {stats.map((stat, index) => (
            <Card key={index} variant="outline" p={5}>
              <CardBody>
                <Stat>
                  <StatLabel fontSize="lg">{stat.label}</StatLabel>
                  <StatNumber fontSize="3xl" fontWeight="bold" color="teal.500">
                    {stat.number}
                  </StatNumber>
                  <StatHelpText color="green.500">
                    {stat.growth}
                  </StatHelpText>
                </Stat>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Services Grid - Main service offerings with features */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          {services.map((service, index) => (
            <Box
              key={index}
              p={8}
              bg={useColorModeValue('white', 'gray.700')} // Dynamic background for light/dark mode
              borderRadius="lg"
              boxShadow="lg"
              transition="all 0.3s" // Smooth transition for hover effect
              _hover={{ transform: 'translateY(-5px)' }} // Lift effect on hover
            >
              {/* Service card content with icon, title, and features */}
              <VStack spacing={4} align="start">
                <Icon as={service.icon} w={8} h={8} color="teal.500" />
                <Heading size="md">{service.title}</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.200')}>
                  {service.description}
                </Text>
                <Divider />
                {/* Feature list with checkmark icons */}
                <VStack align="start" spacing={2}>
                  {service.features.map((feature, idx) => (
                    <Flex key={idx} align="center">
                      <CheckCircleIcon color="green.500" mr={2} />
                      <Text>{feature}</Text>
                    </Flex>
                  ))}
                </VStack>
                <Button colorScheme="teal" size="md" width="full">
                  Learn More
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Call-to-Action Section - Encourage user engagement */}
        <Box
          bg={useColorModeValue('teal.50', 'teal.900')} // Subtle background color
          p={10}
          borderRadius="lg"
          w="full"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Heading size="lg">Ready to Get Started?</Heading>
            <Text>Contact us today to discuss your project requirements</Text>
            <Button
              size="lg"
              colorScheme="teal"
              _hover={{
                transform: 'translateY(-2px)', // Subtle lift effect
                boxShadow: 'lg',
              }}
            >
              Contact Us
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default Services;