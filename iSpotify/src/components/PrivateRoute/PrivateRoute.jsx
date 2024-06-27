import React from 'react'; 
import { Navigate } from 'react-router-dom'; // Importa o componente Navigate do pacote react-router-dom

// Define um componente funcional chamado PrivateRoute
const PrivateRoute = ({ children }) => {
  // Verifica se existe um token no localStorage
  const isAuthenticated = !!localStorage.getItem('token');
  // const isAuthenticated = true;
  
  // Se isAuthenticated for verdadeiro, renderiza os children, senão redireciona para a página de login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute; // Exporta o componente PrivateRoute para ser usado em outros arquivos