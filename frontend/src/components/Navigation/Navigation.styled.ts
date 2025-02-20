import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: #343a40;
  padding: 16px;
  width: 150px;
  border-right: 1px solid #adb5bd;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  margin-bottom: 16px;

  &:last-child {
    margin-top: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

// Reemplazamos `Link` de Gatsby con `NavLink` de React Router
export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  padding: 12px 16px;
  display: block;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #495057;
    color: #f8f9fa;
  }

  &.active {
    font-weight: bold;
    border-left: 4px solid #f8f9fa;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
