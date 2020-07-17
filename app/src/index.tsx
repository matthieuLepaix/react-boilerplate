import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './i18n';
import './index.scss';

import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Loader } from './components/Loader';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
