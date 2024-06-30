import React, { useState, useContext } from 'react';
import { CaminhoesContext } from '../../context/CaminhoesContext';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const CaminhaoForm = () => {
  const { addCaminhao } = useContext(CaminhoesContext);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCaminhao({ modelo, placa });
      setModelo('');
      setPlaca('');
    } catch (error) {
      console.error('Erro ao adicionar caminhão', error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={6} boxShadow="lg" borderRadius="md" bg="white" w="100%" maxW="500px" mx="auto" mt={6}>
      <Stack spacing={4}>
        <FormControl id="modelo">
          <FormLabel>Modelo</FormLabel>
          <Input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Insira o modelo"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="placa">
          <FormLabel>Placa</FormLabel>
          <Input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Insira a placa"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">Adicionar Caminhão</Button>
      </Stack>
    </Box>
  );
};

export default CaminhaoForm;
