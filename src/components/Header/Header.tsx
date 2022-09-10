import * as React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

const StyledHeader = styled.header`
  height: 70px;
  padding-left: 10px;
  
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--txtcolor);
  background-color: var(--primarycolor);

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 10;
`;

const locationsMap = {
  auth: 'Авторизация',
  feed: 'Новости сосите хуи',
  products: 'Ваши продукты',
  recipes: 'Книга рецептов',
  favorite: 'Избранное'
};

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledHeader>
      {
        location.pathname !== '/' &&
          <IoIosArrowBack size="40px" onClick={() => navigate(-1)} />
      }
      <span>
        {
          locationsMap[
            location
              .pathname
              .split('/')
              .filter((item) => item !== '')[0] as keyof typeof locationsMap
          ] || 'Foodboard'
        }
      </span>
    </StyledHeader>
  );
};
