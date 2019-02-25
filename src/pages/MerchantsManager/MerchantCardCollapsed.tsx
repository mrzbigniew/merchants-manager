import * as React from 'react';

import { IMerchant } from '@models/IMerchant';

import './MerchantCardCollapsed.scss';
import Section from '@components/Section/Section';
import Avatar from '@components/Avatar/Avatar';

export interface IMerchantCardProps {
  merchant: IMerchant;
  expanded?: boolean;
}

const MerchantCardCollapsed = ({ merchant }: IMerchantCardProps) => {
  return (
    <Section className="mcc">
      <header className="mcc__title">
        <h2 className="mcc__header">
          <span className="mcc__header--text text--nowrap">{`${merchant.firsName} ${merchant.lastName}`}</span>
          {merchant.hasPremium ? <i className={`fa fa-star mcc__star mcc__star--premium`} title="Premium" /> : null}
        </h2>
        <span className="mcc__email text--nowrap"><a className="mcc__email--link" href={`mailto:${merchant.email}`} title="Send mail">{merchant.email}</a></span>
        <span className="mcc__phone text--nowrap">{merchant.phone}</span>
        <span className="mcc__avatar"><Avatar imageUrl={merchant.avatarUrl} /></span>
      </header>
      <article className="mcc__body">
        {'asd'}
      </article>
    </Section>
  )
}

export default MerchantCardCollapsed;