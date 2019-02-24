import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

const Root = ({ store, component }: { store: Store, component: React.FunctionComponent}) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={component} />
      </Router>
    </Provider>
  );
};

export default Root;
