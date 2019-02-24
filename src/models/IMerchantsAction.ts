import { Action } from 'redux';

export enum MerchantsActionType {
  fetchBegin = 'FETCH_MERCHANTS_BEGIN',
  fetchSuccess = 'FETCH_MERCHANTS_SUCCESS',
  fetchError = 'FETCH_MERCHANTS_ERROR',
  setPageSize = 'SET_MERCHANTS_PAGE_SIZE',
}

import { IFetchMerchantsResponse } from './IFetchMerchantsResponse';
import StoreDispatcher from './StoreDispatcher';
import { IStoreState } from './IStoreState';

export interface IMerchantsObjectAction extends Action<MerchantsActionType> { }
export type IMerchantsFunctionAction<T> = (dispatch: StoreDispatcher, getState?: () => IStoreState) => T;

export interface IFetchMerchantsBeginAction extends IMerchantsObjectAction {
  type: MerchantsActionType.fetchBegin;
}

export interface IFetchMerchantsSuccessAction extends IMerchantsObjectAction {
  type: MerchantsActionType.fetchSuccess;
  data: IFetchMerchantsResponse;
};

export interface IFetchMerchantsErrorAction extends IMerchantsObjectAction {
  type: MerchantsActionType.fetchError;
  error: Error;
}

export interface ISetMerchantsListPageSizeAction extends IMerchantsObjectAction {
  type: MerchantsActionType.setPageSize,
  data: {
    skip: number,
    take: number
  }
}

export type FetchMerchantsAction = IMerchantsFunctionAction<Promise<IFetchMerchantsResponse | Error>>;

export type MerchantsListPageChangeAction = IMerchantsFunctionAction<void>;

export type FetchMerchantsErrorActionFactory = (error: Error) => IFetchMerchantsErrorAction;
export type FetchMerchantsSuccessActionFactory = (data: IFetchMerchantsResponse) => IFetchMerchantsSuccessAction;
export type FetchMerchantsBeginActionFactory = () => IFetchMerchantsBeginAction;
export type FetchMerchantsActionFactory = (payload?: { skip: number, take: number }) => FetchMerchantsAction;
export type MerchantsListPageChangeFactory = (pageNumber: number) => MerchantsListPageChangeAction;
export type SetMerchantsListPageSizeActionFactory = (data: { skip: number, take: number }) => ISetMerchantsListPageSizeAction;

export type MerchantsObjectActions = IFetchMerchantsBeginAction
  | IFetchMerchantsSuccessAction
  | IFetchMerchantsErrorAction
  | ISetMerchantsListPageSizeAction;

export type MerchantsFunctionalActions = FetchMerchantsAction
  | MerchantsListPageChangeAction;

export type MerchantsAction = MerchantsObjectActions
  | MerchantsFunctionalActions;
