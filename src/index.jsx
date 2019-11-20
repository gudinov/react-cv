import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'i18n/i18n';
import App from 'components/App/App';

ReactDOM.render(
  <HashRouter>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </HashRouter>,
  document.getElementById('root'),
);
