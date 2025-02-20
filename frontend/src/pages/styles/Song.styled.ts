import styled from 'styled-components';

export const SongsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;

  h1 {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 600;
    color: #333;
  }

  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    input[type='text'] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .sort-order {
      display: flex;
      align-items: center;
      gap: 8px;

      label {
        font-size: 16px;
        color: #333;
      }
    }

    select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    .add-song-button {
      background-color: #28a745;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #218838;
      }
    }
  }

  .songs-table {
    width: 100%;
    max-width: 1200px;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f0f0f0;
      font-weight: bold;
      color: #333;
    }

    tr:hover {
      background-color: #f9f9f9;
    }

    .delete-button {
      background-color: #dc3545;
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #c82333;
      }
    }
  }
`;
