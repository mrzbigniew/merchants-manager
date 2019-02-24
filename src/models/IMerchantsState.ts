import { IFetchMerchantsResponse } from './IFetchMerchantsResponse';

export interface IMerchantsState {
  data: IFetchMerchantsResponse;
  error: Error | void;
  loading: boolean;
}