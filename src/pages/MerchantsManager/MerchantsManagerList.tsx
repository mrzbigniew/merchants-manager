import * as React from 'react';
import { IMerchant } from '@models/IMerchant';
import { connect } from 'react-redux';

import { IStoreState } from '@models/IStoreState';
import StoreDispatcher from '@models/StoreDispatcher';
import Card from '@components/Card/Card';

import { fetchMerchants, deleteMerchantActionFactory, editMerchantActionFactory } from './MerchantsManagerActions';
import MerchantCardCollapsed from './MerchantCardCollapsed';

import './MerchantsManagerList.scss';

export interface IMerchantsManagerListProps {
  merchants: IMerchant[];
  loadMerchants: () => void;
  deleteMerchant: (merchant: IMerchant) => void;
  editMerchant: (merchant: IMerchant) => void;
}

export interface IMerchantsManagerListState {
  expanded: IMerchant[];
}

const MerchantsManagerList = (props: IMerchantsManagerListProps) => {
  React.useEffect(() => {
    props.loadMerchants()
  }, []);

  return (
    <div className="merchants">
      {
        props.merchants.map(
          item => (
            <Card key={item.id} className='collapsed'>
              <MerchantCardCollapsed deleteMerchant={props.deleteMerchant} editMerchant={props.editMerchant} merchant={item} />
            </Card>
          )
        )
      }
    </div>
  );

}

const mapStateToProps = (state: IStoreState): Partial<IMerchantsManagerListProps> => ({
  merchants: state.merchants.data.merchants
});

const mapDispatchTpProps = (dispatch: StoreDispatcher): Partial<IMerchantsManagerListProps> => ({
  loadMerchants() {
    dispatch(fetchMerchants())
  },
  deleteMerchant(merchant: IMerchant) {
    dispatch(deleteMerchantActionFactory(merchant))
  },
  editMerchant(merchant: IMerchant) {
    dispatch(editMerchantActionFactory(merchant))
  }
});

export default connect(mapStateToProps, mapDispatchTpProps)(MerchantsManagerList);