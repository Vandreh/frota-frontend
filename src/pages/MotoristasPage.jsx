import React, { useEffect, useContext } from 'react';
import MotoristasList from '../components/motoristas/MotoristasList';
import MotoristasForm from '../components/motoristas/MotoristasForm';
import { Heading } from '@chakra-ui/react';

function MotoristasPage() {
  return (
    <div>
      <Heading>Gerenciamento de Motoristas</Heading>
      <MotoristasForm />
      <MotoristasList />
    </div>
  );
}

export default MotoristasPage;
