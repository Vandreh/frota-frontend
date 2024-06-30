import React, { useState, useContext } from 'react';
import { MotoristasContext } from '../../context/MotoristasContext';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const MotoristaForm = () => {
  const { addMotorista } = useContext(MotoristasContext);
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMotorista({ nome });
      setNome('');
    } catch (error) {
      console.error('Erro ao adicionar motorista', error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={6} boxShadow="lg" borderRadius="md" bg="white" w="100%" maxW="500px" mx="auto" mt={6}>
      <Stack spacing={4}>
        <FormControl id="nome">
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira o nome"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">Adicionar Motorista</Button>
      </Stack>
    </Box>
  );
};

export default MotoristaForm;
