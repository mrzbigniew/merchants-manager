import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createClient } from 'service-mocker/client';
import scriptURL from 'sw-loader?name=server.js!./server/server';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.scss';

createClient(scriptURL.toString()).ready.then(
  () => {
    ReactDOM.render(
      <App />,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
  }
);


