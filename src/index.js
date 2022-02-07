import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/GlobalContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);

reportWebVitals();

serviceWorker.register();
