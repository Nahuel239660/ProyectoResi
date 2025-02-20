import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 10px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  animation: fadeIn 0.5s ease-in-out both;

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: #444;
  }

  p {
    font-size: 1rem;
    color: #888;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
