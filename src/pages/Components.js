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
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Kbd,
  Code,
  Divider,
  CircularProgress,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  PinInput,
  PinInputField,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import {
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
  CheckIcon
} from '@chakra-ui/icons';

function Components() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

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

        {/* Accordion Section */}
        <Box>
          <Heading size="md" mb={4}>Accordion</Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Content for section 1
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Content for section 2
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        {/* Interactive Components */}
        <Box>
          <Heading size="md" mb={4}>Interactive Components</Heading>
          <Stack direction="row" spacing={4}>
            <Button onClick={onOpen}>Open Modal</Button>
            <Button onClick={onDrawerOpen}>Open Drawer</Button>
            <Popover>
              <PopoverTrigger>
                <Button>Trigger Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Popover Header</PopoverHeader>
                <PopoverBody>Popover content here</PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        </Box>

        {/* Tags Section */}
        <Box>
          <Heading size="md" mb={4}>Tags</Heading>
          <Stack direction="row" spacing={4}>
            <Tag size="lg" colorScheme="red" borderRadius="full">
              <TagLeftIcon as={WarningIcon} />
              <TagLabel>Error</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="green" borderRadius="full">
              <TagLabel>Success</TagLabel>
              <TagRightIcon as={CheckIcon} />
            </Tag>
            <Tag size="lg" colorScheme="gray" borderRadius="full">
              <TagLabel>Remove</TagLabel>
              <TagCloseButton />
            </Tag>
          </Stack>
        </Box>

        {/* Keyboard and Code */}
        <Box>
          <Heading size="md" mb={4}>Keyboard & Code</Heading>
          <Stack spacing={4}>
            <Text>
              Press <Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>R</Kbd> to refresh
            </Text>
            <Code children="console.log('hello')" />
          </Stack>
        </Box>

        {/* Lists */}
        <Box>
          <Heading size="md" mb={4}>Lists</Heading>
          <Stack spacing={4}>
            <UnorderedList>
              <ListItem>Unordered list item 1</ListItem>
              <ListItem>Unordered list item 2</ListItem>
            </UnorderedList>
            <OrderedList>
              <ListItem>Ordered list item 1</ListItem>
              <ListItem>Ordered list item 2</ListItem>
            </OrderedList>
          </Stack>
        </Box>

        {/* Menu */}
        <Box>
          <Heading size="md" mb={4}>Menu</Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuDivider />
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Form Inputs */}
        <Box>
          <Heading size="md" mb={4}>Advanced Inputs</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Textarea placeholder="Enter text here..." />
            <NumberInput max={50} min={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Stack direction="row">
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </Stack>
          </SimpleGrid>
        </Box>

        {/* Breadcrumb */}
        <Box>
          <Heading size="md" mb={4}>Breadcrumb</Heading>
          <Breadcrumb separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Current</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              This is the modal content
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Drawer */}
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Drawer Title</DrawerHeader>
            <DrawerBody>
              This is the drawer content
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    </Container>
  );
}

export default Components;


  // Add after the Loading States section
  <Box>
    <Heading size="md" mb={4}>Additional Components</Heading>
    <Stack spacing={6}>
      {/* Tooltip */}
      <Box>
        <Tooltip label="This is a tooltip" placement="top">
          <Button>Hover me</Button>
        </Tooltip>
      </Box>

      {/* Circular Progress */}
      <Stack direction="row" spacing={4}>
        <CircularProgress value={80} />
        <CircularProgress isIndeterminate />
      </Stack>

      {/* List with Icons */}
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckIcon} color="green.500" />
          List item with icon
        </ListItem>
        <ListItem>
          <ListIcon as={AddIcon} color="blue.500" />
          Another list item
        </ListItem>
      </List>

      {/* Icon Button */}
      <Stack direction="row" spacing={4}>
        <IconButton
          aria-label="Add item"
          icon={<AddIcon />}
          colorScheme="blue"
        />
        <IconButton
          aria-label="Check item"
          icon={<CheckIcon />}
          colorScheme="green"
        />
      </Stack>

      <Divider />
    </Stack>
  </Box>