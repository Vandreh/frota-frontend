import React, { useContext } from 'react';
import { MotoristasContext } from '../../context/MotoristasContext';
import MotoristaItem from './MotoristaItem';
import { Box, Heading, Stack } from '@chakra-ui/react';

const MotoristasList = () => {
  const { motoristas } = useContext(MotoristasContext);

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={6}>Lista de Motoristas - {motoristas.length}</Heading>
      <Stack spacing={4}>
        {motoristas.map((motorista) => (
          <MotoristaItem key={motorista.id} motorista={motorista} />
        ))}
      </Stack>
    </Box>
  );
};

export default MotoristasList;
