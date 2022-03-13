import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { 
  MainCard, 
  Navigator,
  Account,
  Info,
  LoginCard
} from './components';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { routes } from './routes/AppRouting';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<LoginCard/>}></Route>
          <Route path={routes.login} element={<Account></Account>}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
