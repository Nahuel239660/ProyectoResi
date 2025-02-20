import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Content = styled.main`
  padding: 24px;
  flex-grow: 1;
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
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 12px;
      font-size: 18px;
      padding: 8px 16px;
      background-color: #f9f9f9;
      border-radius: 6px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #e9ecef;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
