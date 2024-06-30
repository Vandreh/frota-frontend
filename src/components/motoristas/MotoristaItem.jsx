import React, { useState, useContext } from 'react';
import { MotoristasContext } from '../../context/MotoristasContext';
import { Box, Button, Input, Text, Stack } from '@chakra-ui/react';

const MotoristaItem = ({ motorista }) => {
  const { updateMotorista, deleteMotorista } = useContext(MotoristasContext);
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState(motorista.nome);

  const handleUpdate = async () => {
    try {
      await updateMotorista(motorista.id, { nome });
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar motorista', error);
    }
  };

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="gray.50" mb={4}>
      {isEditing ? (
        <Stack spacing={3}>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            focusBorderColor="teal.500"
          />
          <Stack direction="row" spacing={2}>
            <Button colorScheme="teal" onClick={handleUpdate}>Salvar</Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="lg">{motorista.nome}</Text>
          <Stack direction="row" spacing={2}>
            <Button colorScheme="blue" onClick={() => setIsEditing(true)}>Editar</Button>
            <Button colorScheme="red" onClick={() => deleteMotorista(motorista.id)}>Deletar</Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default MotoristaItem;
