import * as React from 'react';
import { IMerchant } from '@models/IMerchant';
import Card from '@components/Card/Card';

export interface IMerchantCardProps {
  merchant: IMerchant;
}

const MerchantCard = ({ merchant }: IMerchantCardProps) => {
  return (
    <Card>
      {`${merchant.firsName} ${merchant.lastName}`}
    </Card>
  )
}

export default MerchantCard;