import styled from 'styled-components';

export const StyledSearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #555;
    outline: none;
  }
`;
