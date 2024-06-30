import React, { useState, useContext } from 'react';
import { EntregasContext } from '../../context/EntregasContext';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import EntregaForm from './EntregasForm';

const EntregaItem = ({ entrega }) => {
  const { deleteEntrega } = useContext(EntregasContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    await deleteEntrega(entrega.id);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
      {isEditing ? (
        <EntregaForm entrega={entrega} onClose={() => setIsEditing(false)} />
      ) : (
        <Stack spacing={2}>
          <Text><strong>Tipo:</strong> {entrega.tipo}</Text>
          <Text><strong>Valor:</strong> R$ {entrega.valor}</Text>
          <Text><strong>Região:</strong> {entrega.regiao}</Text>
          <Text><strong>Seguro:</strong> {entrega.seguro ? 'Sim' : 'Não'}</Text>
          <Text><strong>Indicador Valiosa:</strong> {entrega.indicador_valiosa ? 'Sim' : 'Não'}</Text>
          <Text><strong>Indicador Perigosa:</strong> {entrega.indicador_perigosa ? 'Sim' : 'Não'}</Text>
          <Text><strong>Status:</strong> {entrega.status}</Text>
          <Text><strong>Caminhão:</strong> {entrega.Caminhao.modelo} - {entrega.Caminhao.placa}</Text>
          <Text><strong>Motorista:</strong> {entrega.Motoristum.nome}</Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="teal" onClick={() => setIsEditing(true)}>Editar</Button>
            <Button colorScheme="red" onClick={handleDelete}>Deletar</Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default EntregaItem;
