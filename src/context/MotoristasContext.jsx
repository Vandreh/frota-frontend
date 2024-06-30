import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const MotoristasContext = createContext();

export const MotoristasProvider = ({ children }) => {
  const [motoristas, setMotoristas] = useState([]);

  useEffect(() => {
    const fetchMotoristas = async () => {
      try {
        const response = await api.get('/motoristas');
        setMotoristas(response.data);
      } catch (error) {
        console.error('Erro ao buscar motoristas', error);
      }
    };

    fetchMotoristas();
  }, []);

  const addMotorista = async (motorista) => {
    try {
      const response = await api.post('/motoristas', motorista);
      setMotoristas([...motoristas, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar motorista', error);
    }
  };

  const updateMotorista = async (id, updatedMotorista) => {
    try {
      const response = await api.put(`/motoristas/${id}`, updatedMotorista);
      setMotoristas(motoristas.map((motorista) => (motorista.id === id ? response.data : motorista)));
    } catch (error) {
      console.error('Erro ao atualizar motorista', error);
    }
  };

  const deleteMotorista = async (id) => {
    try {
      await api.delete(`/motoristas/${id}`);
      setMotoristas(motoristas.filter((motorista) => motorista.id !== id));
    } catch (error) {
      console.error('Erro ao deletar motorista', error);
    }
  };

  return (
    <MotoristasContext.Provider value={{ motoristas, addMotorista, updateMotorista, deleteMotorista }}>
      {children}
    </MotoristasContext.Provider>
  );
};
