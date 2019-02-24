import { IMerchant } from './IMerchant';

export interface IFetchMerchantsResponse {
  total: number;
  skip: number,
  take: number;
  merchants: IMerchant[];
}
