import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: #7026b9;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #7026b9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5a1e8d;
  }

  &:disabled {
    background-color: #a3a3a3;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;
