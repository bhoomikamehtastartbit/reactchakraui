import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Alert,
  AlertIcon,
  Badge,
  Progress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Avatar,
  AvatarGroup,
  Spinner,
  Skeleton,
  useToast
} from '@chakra-ui/react';

function Components() {
  const toast = useToast();

  return (
    <Container maxW="container.xl" py={10}>
      <Stack spacing={10}>
        <Heading>Chakra UI Components</Heading>

        {/* Alerts Section */}
        <Box>
          <Heading size="md" mb={4}>Alerts</Heading>
          <Stack spacing={3}>
            <Alert status="info"><AlertIcon />Information alert</Alert>
            <Alert status="success"><AlertIcon />Success alert</Alert>
            <Alert status="warning"><AlertIcon />Warning alert</Alert>
            <Alert status="error"><AlertIcon />Error alert</Alert>
          </Stack>
        </Box>

        {/* Badges Section */}
        <Box>
          <Heading size="md" mb={4}>Badges</Heading>
          <Stack direction="row" spacing={2}>
            <Badge>Default</Badge>
            <Badge colorScheme="green">Success</Badge>
            <Badge colorScheme="red">Removed</Badge>
            <Badge colorScheme="purple">New</Badge>
          </Stack>
        </Box>

        {/* Progress Section */}
        <Box>
          <Heading size="md" mb={4}>Progress</Heading>
          <Stack spacing={5}>
            <Progress value={80} />
            <Progress hasStripe value={64} />
            <Progress colorScheme="green" size="lg" value={30} />
          </Stack>
        </Box>

        {/* Tabs Section */}
        <Box>
          <Heading size="md" mb={4}>Tabs</Heading>
          <Tabs>
            <TabList>
              <Tab>First</Tab>
              <Tab>Second</Tab>
              <Tab>Third</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>First tab content</TabPanel>
              <TabPanel>Second tab content</TabPanel>
              <TabPanel>Third tab content</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Form Elements */}
        <Box>
          <Heading size="md" mb={4}>Form Elements</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Input placeholder="Basic input" />
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Checkbox>Basic checkbox</Checkbox>
            <RadioGroup defaultValue="1">
              <Stack direction="row">
                <Radio value="1">First</Radio>
                <Radio value="2">Second</Radio>
                <Radio value="3">Third</Radio>
              </Stack>
            </RadioGroup>
            <Switch />
            <Box>
              <Slider defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Avatar Section */}
        <Box>
          <Heading size="md" mb={4}>Avatars</Heading>
          <Stack direction="row" spacing={4}>
            <AvatarGroup>
              <Avatar name="Ryan Florence" />
              <Avatar name="Segun Adebayo" />
              <Avatar name="Kent Dodds" />
              <Avatar name="Prosper Otemuyiwa" />
              <Avatar name="Christian Nwamba" />
            </AvatarGroup>
          </Stack>
        </Box>

        {/* Loading States */}
        <Box>
          <Heading size="md" mb={4}>Loading States</Heading>
          <Stack spacing={5}>
            <Spinner />
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </Stack>
        </Box>

        {/* Toast Demo */}
        <Box>
          <Heading size="md" mb={4}>Toast</Heading>
          <Button
            colorScheme="blue"
            onClick={() =>
              toast({
                title: "Toast notification",
                description: "This is a toast notification example",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            }
          >
            Show Toast
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Components;