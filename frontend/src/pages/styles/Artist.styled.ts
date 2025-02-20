import styled from 'styled-components';

export const ArtistsPageContainer = styled.div`
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

  .add-artist-button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }

  .artist-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
    overflow-x: auto;

    th,
    td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      word-wrap: break-word;
    }

    th {
      background-color: #f0f0f0;
      font-weight: bold;
      color: #333;
    }

    tr:hover {
      background-color: #f9f9f9;
    }

    td:nth-child(2) {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .actions {
      white-space: nowrap;
    }

    button {
      background-color: #28a745;
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #218838;
      }
    }
  }
`;
