import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@components/Header/Header';
import Logo from '@components/Logo/Logo';
import Container from '@components/Container/Container';
import Footer from '@components/Footer/Footer';
import Main from '@components/Main/Main';

import MerchantManager from './MerchantsManager/MerchantsManager';

import './App.scss';

const App = () => {
  return (
    <Container className="app">
      <Header>
        <Logo label="Merchants manager" />
      </Header>
      <Main className="main">
        <Router>
          <Switch>
            <Route exact={true} path="/" component={MerchantManager} />
          </Switch>
        </Router>
      </Main>
      <Footer />
    </Container>
  )
}

export default App;
