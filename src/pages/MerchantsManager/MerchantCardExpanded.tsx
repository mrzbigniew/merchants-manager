import * as React from 'react';
import { IMerchant } from '@models/IMerchant';

export interface IMerchantCardExpandedProps {
  merchant: IMerchant;
}

const MerchantCardExpanded = ({ merchant }: IMerchantCardExpandedProps) => {
  return (
    <div>{merchant.firsName}</div>
  )
}

export default MerchantCardExpanded;
