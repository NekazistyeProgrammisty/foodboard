import * as React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

const StyledHeader = styled.header`
  height: 60px;
  color: var(--txtcolor);
  background-color: var(--primarycolor);
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

const locationsMap = {
  auth: 'Авторизация'
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
