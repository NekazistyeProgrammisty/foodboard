import * as React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const MainContentWrapper = styled(Wrapper)`
  min-height: calc(100vh - 150px);
  max-width: 100vw;
  padding: 10px 20px;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 10px 10px;
  }
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
