/* eslint-disable max-len */
import * as React from 'react';
import styled from 'styled-components';
import { CgFeed } from 'react-icons/cg';
import { FoodPizza, Heart } from '@styled-icons/fluentui-system-filled';
import { User } from '@styled-icons/fa-solid/User';
import { ReactComponent as RecipeBook } from '../../assets/RecipeBook.svg';
import { StyledLink } from '../sharedstyles';

const StyledFooter = styled.footer`
  position: sticky;
  height: 80px;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  transition: padding 0.4s ease-in;

  background-color: var(--primarycolor);
  color: var(--txtcolor);


  @media screen and (min-width: 800px) {
    padding: 0px 250px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0px 360px;
  }
  @media screen and (max-width: 300px) {
    padding: 0px 2px;
  }
`;

const StyledFooterElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  color: var(--secondarycolor);
  min-width: 35px;
`;

const PizzaIcon = styled(FoodPizza)`
  color: var(--secondarycolor);
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>

      <StyledLink to="/feed">
        <StyledFooterElement>
          <CgFeed size={32} />
          <span>Feed</span>
        </StyledFooterElement>
      </StyledLink>

      <StyledLink to="/products">
        <StyledFooterElement>
          <PizzaIcon size={32} />
          <span>Foods</span>
        </StyledFooterElement>
      </StyledLink>

      <StyledLink to="/recipes">
        <StyledFooterElement>
          <RecipeBook style={{ width: '32px', height: '32px', color: 'var(--secondarycolor)' }} />
          <span>Recipes</span>
        </StyledFooterElement>
      </StyledLink>

      <StyledLink to="/auth">
        <StyledFooterElement>
          <User size={32} />
          <span>User</span>
        </StyledFooterElement>
      </StyledLink>

      <StyledLink to="/favorites">
        <StyledFooterElement>
          <Heart size={32} />
          <span>Favorite</span>
        </StyledFooterElement>
      </StyledLink>

    </StyledFooter>
  );
};
