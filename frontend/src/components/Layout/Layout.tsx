import React, { ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import { HomeContainer, Content } from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HomeContainer>
      <Navigation />
      <Content>{children}</Content>
    </HomeContainer>
  );
};

export default Layout;
