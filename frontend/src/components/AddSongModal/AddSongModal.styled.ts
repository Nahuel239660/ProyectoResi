import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    margin-top: 5px;
  }

  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    resize: vertical;
    margin-top: 5px;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .btn {
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.btn-primary {
      background-color: #007bff;
      color: #fff;
      margin-right: 10px;

      &:hover {
        background-color: #0056b3;
      }
    }

    &.btn-secondary {
      background-color: #6c757d;
      color: #fff;
      margin-left: 10px;

      &:hover {
        background-color: #5a6268;
      }
    }
  }
`;

export const SuccessMessage = styled.p`
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
`;
