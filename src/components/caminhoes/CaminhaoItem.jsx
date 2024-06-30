import React, { useState, useContext } from 'react';
import { CaminhoesContext } from '../../context/CaminhoesContext';
import { Box, Button, Input, Text, Stack } from '@chakra-ui/react';

const CaminhaoItem = ({ caminhao, deleteCaminhao }) => {
  const { updateCaminhao } = useContext(CaminhoesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [modelo, setModelo] = useState(caminhao.modelo);
  const [placa, setPlaca] = useState(caminhao.placa);

  const handleUpdate = async () => {
    try {
      await updateCaminhao(caminhao.id, { modelo, placa });
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar caminhão', error);
    }
  };

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bg="gray.50" mb={4}>
      {isEditing ? (
        <Stack spacing={3}>
          <Input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Modelo"
            focusBorderColor="teal.500"
          />
          <Input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Placa"
            focusBorderColor="teal.500"
          />
          <Stack direction="row" spacing={2}>
            <Button colorScheme="teal" onClick={handleUpdate}>Salvar</Button>
            <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="lg">{caminhao.modelo}</Text>
          <Text>{caminhao.placa}</Text>
          <Stack direction="row" spacing={2}>
            <Button colorScheme="blue" onClick={() => setIsEditing(true)}>Editar</Button>
            <Button colorScheme="red" onClick={() => deleteCaminhao(caminhao.id)}>Deletar</Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default CaminhaoItem;
