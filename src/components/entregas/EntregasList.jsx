import React, { useContext } from 'react';
import { EntregasContext } from '../../context/EntregasContext';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import EntregaItem from './EntregaItem';

const EntregasList = () => {
  const { entregas } = useContext(EntregasContext);

  return (
    <Box>
      <Heading as="h2" size="lg" mb={6}>Lista de Entregas - {entregas.length}</Heading>
      <Button colorScheme="teal" mb={4} as="a" href="/add-entrega">Adicionar Entrega</Button>
      <Stack spacing={4}>
        {entregas.map((entrega) => (
          <EntregaItem key={entrega.id} entrega={entrega} />
        ))}
      </Stack>
    </Box>
  );
};

export default EntregasList;
