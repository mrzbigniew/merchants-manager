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

class MerchantsManagerList extends React.Component<IMerchantsManagerListProps, IMerchantsManagerListState>{
  public isExpanded(item: IMerchant): boolean {
    return this.state.expanded.includes(item)
  }

  public componentDidMount() {
    this.props.loadMerchants();
  }

  public componentWillReceiveProps() {
    this.setState({
      expanded: []
    });
  }

  public render() {
    return (
      <div className="merchants">
        {
          this.props.merchants.map(
            item => (
              <Card key={item.id} className={this.isExpanded(item) ? 'expanded' : 'collapsed'}>
                <MerchantCardCollapsed deleteMerchant={this.props.deleteMerchant} editMerchant={this.props.editMerchant} merchant={item} />
              </Card>
            )
          )
        }
      </div>
    );
  };
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