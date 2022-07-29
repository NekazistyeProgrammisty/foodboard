import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { store } from './redux/store';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Stalinist+One&display=swap');

  :root {
      --primarybackgroundcolor: #F2F2F2;
      --primarycolor: #EB5252;
      --txtcolor: #FBFBFB;
      --headertxtsize: 1.5rem;
      --secondarycolor: #FFE8BB;
      --buttonbg: #F6E0B5;
      --cardwidth: 11rem;
      --cardlength: 13.75rem;
      --secondarytxtcolor: #24202b;
      --secondarytxtcolorhovered: #252329;
  }


  * {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
  }

  #root {
      height: 100%;
  }

  html,
  body {
      height: 100%;
  }
`;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
