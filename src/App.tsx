import * as React from 'react';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import { footerSections } from './App.constants';


const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer 
        sections={footerSections}
      />
    </div>
  );
}

export default App;