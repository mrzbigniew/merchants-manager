import * as React from 'react';

import Container from '@components/Container/Container';

import MerchantsManagerListPager from './MerchantsManagerListPager';
import MerchantsManagerList from './MerchantsManagerList';

import './MerchantsManager.scss';

const MerchantManager = () => {
  return (
    <Container className="merchants__manager">
      <MerchantsManagerListPager />
      <MerchantsManagerList />
    </Container>
  )
};

export default MerchantManager;