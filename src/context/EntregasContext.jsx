import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const EntregasContext = createContext();

export const EntregasProvider = ({ children }) => {
  const [entregas, setEntregas] = useState([]);
  const [caminhoes, setCaminhoes] = useState([]);
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    const fetchEntregas = async () => {
      try {
        const response = await api.get('/entregas');
        setEntregas(response.data);
      } catch (error) {
        console.error('Erro ao buscar entregas', error);
      }
    };

    const fetchCaminhoes = async () => {
      try {
        const response = await api.get('/caminhoes');
        setCaminhoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar caminhões', error);
      }
    };

    const fetchMotoristas = async () => {
      try {
        const response = await api.get('/motoristas');
        setMotoristas(response.data);
      } catch (error) {
        console.error('Erro ao buscar motoristas', error);
      }
    };

    fetchEntregas();
    fetchCaminhoes();
    fetchMotoristas();
  }, []);

  const addEntrega = async (entrega) => {
    try {
      const response = await api.post('/entregas', entrega);
      setEntregas([...entregas, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar entrega', error);
    }
  };

  const updateEntrega = async (id, updatedEntrega) => {
    try {
      const response = await api.put(`/entregas/${id}`, updatedEntrega);
      setEntregas(entregas.map((entrega) => (entrega.id === id ? response.data : entrega)));
    } catch (error) {
      console.error('Erro ao atualizar entrega', error);
    }
  };

  const deleteEntrega = async (id) => {
    try {
      await api.delete(`/entregas/${id}`);
      setEntregas(entregas.filter((entrega) => entrega.id !== id));
    } catch (error) {
      console.error('Erro ao deletar entrega', error);
    }
  };

  return (
    <EntregasContext.Provider value={{ entregas, addEntrega, updateEntrega, deleteEntrega, caminhoes, motoristas }}>
      {children}
    </EntregasContext.Provider>
  );
};
