import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const CaminhoesContext = createContext();

export const CaminhoesProvider = ({ children }) => {
  const [caminhoes, setCaminhoes] = useState([]);

  useEffect(() => {
    const fetchCaminhoes = async () => {
      try {
        const response = await api.get('/caminhoes');
        setCaminhoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar caminhões', error);
      }
    };

    fetchCaminhoes();
  }, []);

  const addCaminhao = async (caminhao) => {
    try {
      const response = await api.post('/caminhoes', caminhao);
      setCaminhoes((prevCaminhoes) => [...prevCaminhoes, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar caminhão', error);
      throw error;
    }
  };

  const updateCaminhao = async (id, updatedCaminhao) => {
    try {
      const response = await api.put(`/caminhoes/${id}`, updatedCaminhao);
      setCaminhoes((prevCaminhoes) =>
        prevCaminhoes.map((caminhao) =>
          caminhao.id === id ? response.data : caminhao
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar caminhão', error);
      throw error;
    }
  };

  const deleteCaminhao = async (id) => {
    try {
      await api.delete(`/caminhoes/${id}`);
      setCaminhoes((prevCaminhoes) =>
        prevCaminhoes.filter((caminhao) => caminhao.id !== id)
      );
    } catch (error) {
      console.error('Erro ao deletar caminhão', error);
      throw error;
    }
  };

  return (
    <CaminhoesContext.Provider
      value={{ caminhoes, addCaminhao, updateCaminhao, deleteCaminhao }}
    >
      {children}
    </CaminhoesContext.Provider>
  );
};
