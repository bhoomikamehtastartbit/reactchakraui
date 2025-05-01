import { useState } from 'react';

import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Box
} from '@chakra-ui/react';

function Tables() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Box mb={8}>
        <Heading>User Data Table</Heading>
      </Box>
      
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                <Button size="sm" onClick={() => handleRowClick(user)}>
                  View Details
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedUser && (
              <>
                <Text><strong>Name:</strong> {selectedUser.name}</Text>
                <Text><strong>Email:</strong> {selectedUser.email}</Text>
                <Text><strong>Role:</strong> {selectedUser.role}</Text>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Tables;