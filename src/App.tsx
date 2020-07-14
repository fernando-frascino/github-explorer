import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './router';
import GlobalStyl from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyl />
  </>
);

export default App;
