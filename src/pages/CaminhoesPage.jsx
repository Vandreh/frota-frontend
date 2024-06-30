import React from 'react';
import CaminhoesForm from '../components/caminhoes/CaminhoesForm';
import CaminhoesList from '../components/caminhoes/CaminhoesList';
import { Heading } from '@chakra-ui/react';


const CaminhoesPage = () => {
  return (
    <div>
      <Heading>Gerenciamento de Caminhões</Heading>
      <CaminhoesForm />
      <CaminhoesList />
    </div>
  );
};

export default CaminhoesPage;
