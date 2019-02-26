import * as React from 'react';

import { IMerchant } from '@models/IMerchant';

import Section from '@components/Section/Section';
import Avatar from '@components/Avatar/Avatar';
import { formatDate } from '@utils/formatDate';

import './MerchantCardCollapsed.scss';
import ActionToggle from '@components/ActionToggle/ActionTogle';

export interface IMerchantCardProps {
  merchant: IMerchant;
  expanded?: boolean;
  deleteMerchant: (merchant: IMerchant) => void;
  editMerchant: (merchant: IMerchant) => void;
}

const MerchantCardCollapsed = ({ merchant, deleteMerchant, editMerchant }: IMerchantCardProps) => {
  const bids = merchant.bids.sort((c, n) => c.created.getTime() - n.created.getTime()).reverse();

  const [pagerState, setState] = React.useState({
    take: 5,
    skip: 0
  });

  const prevPage = () => {
    const { skip, take } = pagerState;
    if (pagerState.skip > 0) {
      setState({
        skip: skip - take,
        take
      })
    }
  };

  const nextPage = () => {
    const { skip, take } = pagerState;
    if (skip < bids.length) {
      setState({
        skip: skip + take,
        take
      })
    }
  }

  const onEdit = () => {
    editMerchant(merchant);
  }

  const onDelete = () => {
    deleteMerchant(merchant);
  }

  return (
    <Section className="mcc">
      <div className="mcc__action">
        <ActionToggle>
          <div className="mcc__action--container">
            <div className="mcc__action--item mcc__action--edit" onClick={onEdit}>Edit</div>
            <div className="mcc__action--item mcc__action--delete" onClick={onDelete}>Delete</div>
          </div>
        </ActionToggle>
      </div>
      <header className="mcc__title">
        <h2 className="mcc__header">
          <span className="mcc__header--text text--nowrap">{`${merchant.firsName} ${merchant.lastName}`}</span>
          {merchant.hasPremium ? <i className={`fa fa-star mcc__star mcc__star--premium`} title="Premium" /> : null}
        </h2>
        <span className="mcc__email text--nowrap"><a className="mcc__email--link" href={`mailto:${merchant.email}`} title="Send mail">{merchant.email}</a></span>
        <span className="mcc__phone text--nowrap">{merchant.phone}</span>
        <span className="mcc__avatar"><Avatar imageUrl={merchant.avatarUrl} /></span>
      </header>
      <div className="mcc__bids">
        <h3 className="mcc__bids__header">
          {(bids.length ? <i className="mcc__grid--nav mcc__grid--prev fa fas fa-angle-left" onClick={prevPage} /> : null)}
          <span>Recent bids</span>
          {(bids.length ? <i className="mcc__grid--nav mcc__grid--next fa fas fa-angle-right" onClick={nextPage} /> : null)}
        </h3>
        <div className="mcc__grid">
          <>
            <div className="mcc__grid--header mcc__grid--template">
              <span className="mcc__grid--celh"><b>Car title</b></span>
              <span className="mcc__grid--celh"><b>Bid amount</b></span>
              <span className="mcc__grid--celh"><b>Created</b></span>
            </div>
            <div className={bids.length ? 'mcc__grid--content mcc__grid--template' : 'mcc__grid--empty'}>
              {
                bids.length
                  ? bids.slice(pagerState.skip, pagerState.skip + pagerState.take).reverse().map(
                    bid => (
                      <div className="mcc__grid--wrapper " key={bid.id}>
                        <span className="mcc__grid--cel">{bid.carTitle}</span>
                        <span className="mcc__grid--cel">{bid.amount}</span>
                        <span className="mcc__grid--cel">{formatDate(bid.created)}</span>
                      </div>
                    )
                  )
                  : <div>Merchant doesn't have any bids yet</div>
              }
            </div>
          </>
        </div>
      </div>
    </Section>
  )
}

export default MerchantCardCollapsed;
