import React, { createContext, useState, ReactNode } from 'react';

// Define el tipo del contexto
interface TokenContextType {
  token: string | null;
  updateToken: (newToken: string) => void;
  removeToken: () => void;
}

// Crea el contexto con un valor por defecto
export const TokenContext = createContext<TokenContextType>({
  token: null,
  updateToken: () => {},
  removeToken: () => {},
});

// Define los props del `TokenContextProvider`
interface TokenContextProviderProps {
  children: ReactNode;
}

// El `TokenContextProvider` almacena el token y proporciona funciones para actualizarlo o eliminarlo
export const TokenContextProvider: React.FC<TokenContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Función para actualizar el token
  const updateToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken); // Guarda el token en localStorage
  };

  // Función para eliminar el token (logout)
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('token'); // Elimina el token de localStorage
  };

  return (
    <TokenContext.Provider value={{ token, updateToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};
