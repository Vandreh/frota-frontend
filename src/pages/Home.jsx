import React from 'react';
import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box p={5}>
      <Stack spacing={3} align="center">
        <Heading>Controle de Frota</Heading>
        <Text>Gerencie sua frota de caminhões, motoristas e entregas com facilidade.</Text>
        <Stack direction="row" spacing={4}>
          <Link to="/caminhoes">
            <Button colorScheme="teal">Caminhões</Button>
          </Link>
          <Link to="/entregas">
            <Button colorScheme="teal">Entregas</Button>
          </Link>
          <Link to="/motoristas">
            <Button colorScheme="teal">Motoristas</Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;