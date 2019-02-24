import * as React from 'react';
import { IMerchant } from '@models/IMerchant';
import { connect } from 'react-redux';

import { IStoreState } from '@models/IStoreState';
import StoreDispatcher from '@models/StoreDispatcher';
import Section from '@components/Section/Section';
import Card from '@components/Card/Card';

import { fetchMerchants } from './MerchantsManagerActions';

import './MerchantsManagerList.scss';

export interface IMerchantsManagerListProps {
  merchants: IMerchant[];
  loadMerchants: () => void;
}

class MerchantsManagerList extends React.Component<IMerchantsManagerListProps>{
  public componentDidMount() {
    this.props.loadMerchants();
  }

  public render() {
    return (
      <Section className="merchants__list">
        {
          this.props.merchants.map(
            item => (
              <Card key={item.id}>
                {item.firsName}
              </Card>
            )
          )
        }
      </Section>
    );
  };
}

const mapStateToProps = (state: IStoreState): Partial<IMerchantsManagerListProps> => ({
  merchants: state.merchants.data.merchants
});

const mapDispatchTpProps = (dispatch: StoreDispatcher): Partial<IMerchantsManagerListProps> => ({
  loadMerchants() {
    dispatch(fetchMerchants())
  }
});

export default connect(mapStateToProps, mapDispatchTpProps)(MerchantsManagerList);