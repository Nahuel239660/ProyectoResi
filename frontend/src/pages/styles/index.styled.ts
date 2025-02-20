import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 20px auto;

  h1 {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 600;
    color: #333;
  }

  input {
    margin-bottom: 24px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    max-width: 400px;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    }
  }
`;
