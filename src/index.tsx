import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createClient } from 'service-mocker/client';
import scriptURL from 'sw-loader?name=server.js!./server/server';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import Root from '@components/Root/Root';
import App from '@pages/App';

import './index.scss';

const store = configureStore();

createClient(scriptURL.toString()).ready.then(
  () => {
    ReactDOM.render(
      <Root store={store} component={App}/>,
      document.getElementById('root') as HTMLElement
    );
    registerServiceWorker();
  }
);
