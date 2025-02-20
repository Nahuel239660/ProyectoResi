import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavContainer,
  NavList,
  NavItem,
  NavLink,
  LogoutButton,
} from './Navigation.styled';
import { TokenContext } from '../../context/TokenContext';

const Navigation: React.FC = () => {
  const { removeToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    removeToken();
    navigate('/login'); // Redirigir al usuario a la página de login
  };

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/artist">Artists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/song">Songs</NavLink>
        </NavItem>
        <NavItem className="logout">
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
