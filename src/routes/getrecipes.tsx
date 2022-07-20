/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';

import CardHolder from '../components/CardHolder/CardHolder';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';

const RecipesListPage: React.FunctionComponent = () => (
  <>
    <Header />
    <Container>
      <>
        <InputField type="search" placeholder="Search for recipes..." />
        <CardHolder />
      </>
    </Container>
  </>
);

export default RecipesListPage;
