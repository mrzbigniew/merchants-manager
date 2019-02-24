import { IFetchMerchantsResponse } from '@models/IFetchMerchantsResponse';

import { buildQueryString } from '@utils/buildQueryString';

export const apiFetchMerchants = async (params: { skip: number, take: number }): Promise<IFetchMerchantsResponse> => {
  const res = await fetch(`/api/merchants${buildQueryString(params)}`);
  const data: IFetchMerchantsResponse = await res.json();
  return data;
}
