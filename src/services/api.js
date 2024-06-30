import axios from 'axios';

const api = axios.create({
  baseURL: 'https://frota-backend.onrender.com',
});

// Interceptando erros globalmente
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Aqui você pode processar o erro como preferir
    if (error.response) {
      // O servidor retornou um status diferente de 2xx
      const { data } = error.response;
      // Lança um erro com a mensagem recebida do backend
      throw new Error(data.error.message);
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta do servidor
      console.error('Não houve resposta do servidor:', error.request);
    } else {
      // Algo aconteceu durante a requisição que causou o erro
      console.error('Erro ao realizar requisição:', error.message);
    }
    throw error;
  }
);

export default api;
