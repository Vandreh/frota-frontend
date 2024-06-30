import React, { useState, useContext } from 'react';
import { EntregasContext } from '../../context/EntregasContext';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Switch } from '@chakra-ui/react';

const EntregasForm = ({ entrega, onClose }) => {
  const { addEntrega, updateEntrega, caminhoes, motoristas } = useContext(EntregasContext);
  const [tipo, setTipo] = useState(entrega ? entrega.tipo : '');
  const [valor, setValor] = useState(entrega ? entrega.valor : '');
  const [regiao, setRegiao] = useState(entrega ? entrega.regiao : '');
  const [seguro, setSeguro] = useState(entrega ? entrega.seguro : false);
  const [indicadorValiosa, setIndicadorValiosa] = useState(entrega ? entrega.indicador_valiosa : false);
  const [indicadorPerigosa, setIndicadorPerigosa] = useState(entrega ? entrega.indicador_perigosa : false);
  const [status, setStatus] = useState(entrega ? entrega.status : 'pendente');
  const [caminhaoId, setCaminhaoId] = useState(entrega ? entrega.caminhaoId : '');
  const [motoristaId, setMotoristaId] = useState(entrega ? entrega.motoristaId : '');

  const [error, setError] = useState(null);
  const [showSeguro, setShowSeguro] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntrega = {
      tipo,
      valor: Number(valor),
      regiao,
      seguro,
      indicador_valiosa: indicadorValiosa,
      indicador_perigosa: indicadorPerigosa,
      status,
      caminhaoId: Number(caminhaoId),
      motoristaId: Number(motoristaId)
    };
    try {
      if (entrega) {
        await updateEntrega(entrega.id, newEntrega);
      } else {
        await addEntrega(newEntrega);
      }
      onClose();
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleTipoChange = (value) => {
    setTipo(value);
    if (value.toLowerCase().includes('eletrônico')) {
      setShowSeguro(true);
    } else {
      setShowSeguro(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={6} boxShadow="lg" borderRadius="md" bg="white" w="100%" maxW="500px" mx="auto" mt={6}>
      {error && (
        <div style={{ color: 'red', marginBottom: '10px' }}>
          Erro: {error}
        </div>
      )}
      <Stack spacing={4}>
        <FormControl id="tipo">
          <FormLabel>Tipo</FormLabel>
          <Input
            type="text"
            value={tipo}
            onChange={(e) => handleTipoChange(e.target.value)}
            placeholder="Tipo da entrega"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="valor">
          <FormLabel>Valor</FormLabel>
          <Input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Valor da entrega"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="regiao">
          <FormLabel>Região</FormLabel>
          <Input
            type="text"
            value={regiao}
            onChange={(e) => setRegiao(e.target.value)}
            placeholder="Região da entrega"
            focusBorderColor="teal.500"
          />
        </FormControl>
        {showSeguro && (
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="seguro" mb="0">
              Seguro
            </FormLabel>
            <Switch id="seguro" isChecked={seguro} onChange={(e) => setSeguro(e.target.checked)} />
          </FormControl>
        )}
        {/* <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="indicador_valiosa" mb="0">
            Indicador Valiosa
          </FormLabel>
          <Switch id="indicador_valiosa" isChecked={indicadorValiosa} onChange={(e) => setIndicadorValiosa(e.target.checked)} />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="indicador_perigosa" mb="0">
            Indicador Perigosa
          </FormLabel>
          <Switch id="indicador_perigosa" isChecked={indicadorPerigosa} onChange={(e) => setIndicadorPerigosa(e.target.checked)} />
        </FormControl> */}
        <FormControl id="status">
          <FormLabel>Status</FormLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Selecione o status" focusBorderColor="teal.500">
            <option value="pendente">Pendente</option>
            <option value="em-andamento">Em andamento</option>
            <option value="concluido">Concluído</option>
          </Select>
        </FormControl>
        <FormControl id="caminhaoId">
          <FormLabel>Caminhão</FormLabel>
          <Select value={caminhaoId} onChange={(e) => setCaminhaoId(e.target.value)} placeholder="Selecione um caminhão" focusBorderColor="teal.500">
            {caminhoes.map((caminhao) => (
              <option key={caminhao.id} value={caminhao.id}>
                {caminhao.modelo} - {caminhao.placa}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="motoristaId">
          <FormLabel>Motorista</FormLabel>
          <Select value={motoristaId} onChange={(e) => setMotoristaId(e.target.value)} placeholder="Selecione um motorista" focusBorderColor="teal.500">
            {motoristas.map((motorista) => (
              <option key={motorista.id} value={motorista.id}>
                {motorista.nome}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" type="submit">{entrega ? 'Salvar Alterações' : 'Adicionar Entrega'}</Button>
        <Button colorScheme="gray" onClick={onClose}>Cancelar</Button>
      </Stack>
    </Box>
  );
};

export default EntregasForm;
