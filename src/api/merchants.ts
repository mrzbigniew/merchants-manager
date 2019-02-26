import { IFetchMerchantsResponse } from '@models/IFetchMerchantsResponse';

import { buildQueryString } from '@utils/buildQueryString';
import { IMerchant } from '@models/IMerchant';

export const apiFetchMerchants = async (params: { skip: number, take: number }): Promise<IFetchMerchantsResponse> => {
  const res = await fetch(`/api/merchants${buildQueryString(params)}`);
  const data: IFetchMerchantsResponse = await res.json();
  return {
    ...data,
    merchants: data.merchants.map(
      merchant => ({
        ...merchant,
        bids: merchant.bids.map(
          bid => ({
            ...bid,
            created: new Date(bid.created)
          })
        )
      })
    )
  };
}

export const apiDeleteMerchant = async (merchant: IMerchant): Promise<void> => {
  const res = await fetch(`/api/merchants/${merchant.id}`, {
    method: 'DELETE'
  });
  return await res.text().then(() => undefined);
}
