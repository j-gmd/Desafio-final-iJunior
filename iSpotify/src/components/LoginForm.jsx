import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Input from '../pages/Register/Input';

//Autenticação Cadastral
import { login } from '../spotify';

const LoginForm = () => {
  const navigate = useNavigate();
//Autenticação Cadastral
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /*const handleLogin = () => {
    navigate('/artists');
  };*/
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/artists');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
        <div className="login-container">
      <div className="title">iSpotify ®</div>
      <div className="subtitle">Música para todos.</div>
      {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <Input
            tipo="Email"
            imgSrc="src/assets/mail.png"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            tipo="Senha"
            imgSrc="src/assets/lock.png"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">Entrar</button>
        </form>
      <p className="signup-text">Não tem um conta? <a onClick={handleRegister}>Inscreva-se</a></p>
    </div>
    </div>
    );
};

export default LoginForm;