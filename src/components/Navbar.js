import { Box, Flex, Link, Button, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" color="white">Logo</Box>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="/about" color="white">About</Link>
          <Link as={RouterLink} to="/contact" color="white">Contact</Link>
          <Link as={RouterLink} to="/tables" color="white">Tables</Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Navbar;