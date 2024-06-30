import React, { useContext } from 'react';
import { CaminhoesContext } from '../../context/CaminhoesContext';
import CaminhaoItem from './CaminhaoItem';
import { Box, Heading, Stack } from '@chakra-ui/react';

const CaminhoesList = () => {
  const { caminhoes, deleteCaminhao } = useContext(CaminhoesContext);

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={6}>Lista de Caminhões - {caminhoes.length}</Heading>
      <Stack spacing={4}>
        {caminhoes.map((caminhao) => (
          <CaminhaoItem key={caminhao.id} caminhao={caminhao} deleteCaminhao={deleteCaminhao} />
        ))}
      </Stack>
    </Box>
  );
};

export default CaminhoesList;
