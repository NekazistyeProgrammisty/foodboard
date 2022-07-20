import * as React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainContentWrapper = styled(Wrapper)`
  height: calc(100% - 120px); 
`;

export const MainLayout: React.FC = () => (
  <Wrapper>
    <Header />
    <MainContentWrapper>
      <Outlet />
    </MainContentWrapper>
    <Footer />
  </Wrapper>
);
