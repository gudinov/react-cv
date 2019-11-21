import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'i18n/i18n';
import Spinner from 'UI/Spinner/Spinner';

import './style.scss';

const App = React.lazy(() => import('components/App/App'));

ReactDOM.render(
  <HashRouter>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </HashRouter>,
  document.getElementById('root'),
);
