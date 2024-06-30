import React from 'react';
import EntregasList from '../components/entregas/EntregasList';
import EntregasForm from '../components/entregas/EntregasForm';
import { Heading } from '@chakra-ui/react';

function EntregasPage() {
  return (
    <div>
      <Heading>Gerenciamento de Entregas</Heading>
      <EntregasForm />
      <EntregasList />
    </div>
  );
}

export default EntregasPage;
