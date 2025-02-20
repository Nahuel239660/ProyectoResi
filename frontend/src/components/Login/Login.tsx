import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../context/TokenContext';
import {
  LoginContainer,
  LoginForm,
  InputGroup,
  Button,
  ErrorMessage,
} from './LoginPage.styled';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { updateToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      const fakeToken = '1234567890';
      localStorage.setItem('token', fakeToken);
      updateToken(fakeToken);
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputGroup>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
