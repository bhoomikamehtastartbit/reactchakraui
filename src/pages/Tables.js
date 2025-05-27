// Import required Chakra UI components and React hooks
import { useState } from 'react';
import {
  Container, Table, Thead, Tbody, Tr, Th, Td, Button, useDisclosure, Modal,
  ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text,
  Heading, Box, Input, Stack, Select, Badge, TableContainer, IconButton,
  useColorModeValue
} from '@chakra-ui/react';
// Import icons for pagination and sorting indicators
import { ChevronLeftIcon, ChevronRightIcon, TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

function Tables() {
  // Modal state for displaying user details
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(null);
  
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for handling pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for table column sorting
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 3; // Number of items to display per page

  // Mock data array representing user records
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active' },
    { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Editor', status: 'Inactive' },
  ];

  // Theme colors for dark/light mode compatibility
  const rowHoverColor = useColorModeValue('gray.50', 'gray.700');
  const tableHeaderBg = useColorModeValue('gray.50', 'gray.700');
  const tableBg = useColorModeValue('white', 'gray.800');

  // Filter data based on search query - searches across all user fields
  const filteredData = data.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sort data based on selected column and sort direction
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  // Calculate pagination metrics and slice data for current page
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Toggle sort order and field when clicking column headers
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Handle row click to display user details in modal
  const handleRowClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  // Utility function to determine badge color based on user status
  const getBadgeColor = (status) => {
    return status === 'Active' ? 'green' : 'red';
  };

  return (
    <Container maxW="container.xl" py={10}>
      {/* Search and filter section */}
      <Box mb={8}>
        <Heading mb={4}>User Data Table</Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={4}>
          {/* Search input with responsive width */}
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            maxW={{ base: 'full', md: '300px' }}
          />
          {/* Items per page selector */}
          <Select
            maxW={{ base: 'full', md: '200px' }}
            value={itemsPerPage}
            onChange={(e) => {
              // Items per page handler (currently disabled)
            }}
          >
            <option value={3}>3 per page</option>
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
          </Select>
        </Stack>
      </Box>

      {/* Main table container with styling */}
      <TableContainer
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="sm"
        bg={tableBg}
      >
        <Table variant="simple">
          {/* Table header with sortable columns */}
          <Thead bg={tableHeaderBg}>
            <Tr>
              {/* Sortable column headers with direction indicators */}
              <Th cursor="pointer" onClick={() => handleSort('name')}>
                Name {sortField === 'name' && (sortOrder === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
              </Th>
              <Th cursor="pointer" onClick={() => handleSort('email')}>
                Email {sortField === 'email' && (sortOrder === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
              </Th>
              <Th cursor="pointer" onClick={() => handleSort('role')}>
                Role {sortField === 'role' && (sortOrder === 'asc' ? <TriangleUpIcon /> : <TriangleDownIcon />)}
              </Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          {/* Table body with user data rows */}
          <Tbody>
            {paginatedData.map((user) => (
              // Interactive row with hover effect
              <Tr
                key={user.id}
                _hover={{ bg: rowHoverColor }}
                cursor="pointer"
              >
                {/* User data cells */}
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  {/* Status badge with dynamic color */}
                  <Badge colorScheme={getBadgeColor(user.status)}>
                    {user.status}
                  </Badge>
                </Td>
                <Td>
                  {/* Action button to view user details */}
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={() => handleRowClick(user)}
                  >
                    View Details
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination controls */}
      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        {/* Previous page button */}
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
        />
        {/* Page indicator */}
        <Text alignSelf="center">
          Page {currentPage} of {totalPages}
        </Text>
        {/* Next page button */}
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          isDisabled={currentPage === totalPages}
        />
      </Stack>

      {/* User details modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* Display selected user details */}
            {selectedUser && (
              <Stack spacing={3}>
                <Text><strong>Name:</strong> {selectedUser.name}</Text>
                <Text><strong>Email:</strong> {selectedUser.email}</Text>
                <Text><strong>Role:</strong> {selectedUser.role}</Text>
                <Text><strong>Status:</strong>
                  <Badge ml={2} colorScheme={getBadgeColor(selectedUser.status)}>
                    {selectedUser.status}
                  </Badge>
                </Text>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Tables;
