import { useToast } from '@chakra-ui/react';

const ErrorToast = ({ errorMessage }) => {
  const toast = useToast();

  toast({
    title: 'Erro',
    description: errorMessage,
    status: 'error',
    duration: 5000,
    isClosable: true,
  });

  return null; // Renderização condicional usando um hook de toast
};

export default ErrorToast;
