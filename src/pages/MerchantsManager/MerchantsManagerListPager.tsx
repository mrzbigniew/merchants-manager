import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '@models/IStoreState';
import StoreDispatcher from '@models/StoreDispatcher';
import Pager from '@components/Pager/Pager';

import { merchantsListPageChange } from './MerchantsManagerActions';

import './MerchantsManagerListPager.scss';

export interface IMerchantsManagerListPagerProps {
  currentPage: number;
  maxPage: number;
  minPage: number;
  pageChange: (page: number) => void;
}

export const MerchantsManagerListPager = (props: IMerchantsManagerListPagerProps) => {
   return (
    <Pager {...props} />
  )
}

const mapStateToProps = (state: IStoreState): Partial<IMerchantsManagerListPagerProps> => ({
  currentPage: state.merchants.data.total ? (state.merchants.data.skip / state.merchants.data.take) + 1 : 0,
  maxPage: state.merchants.data.total ? Math.ceil(state.merchants.data.total / state.merchants.data.take) : 0,
  minPage: state.merchants.data.total ? 1 : 0,
});

const mapDispatchToProps = (dispatch: StoreDispatcher): Partial<IMerchantsManagerListPagerProps> => ({
  pageChange(page: number) {
    dispatch(merchantsListPageChange(page))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsManagerListPager);
