import { Action } from 'redux';

export enum MerchantsActionType {
  fetchBegin = 'FETCH_MERCHANTS_BEGIN',
  fetchSuccess = 'FETCH_MERCHANTS_SUCCESS',
  fetchError = 'FETCH_MERCHANTS_ERROR',
  setPageSize = 'SET_MERCHANTS_PAGE_SIZE',
  deleteBegin = 'DELETE_MERCHANT_BEGIN',
  deleteSuccess = 'DELETE_MERCHANT_SUCCESS',
  deleteError = 'DELETE_MERCHANT_ERROR',
  saveMerchantBegin = 'SAVE_MERCHANT_BEGIN',
  saveMerchantSuccess = 'SAVE_MERCHANT_SUCCESS',
  saveMerchantError = 'SAVE_MERCHANT_ERROR',
}

import { IFetchMerchantsResponse } from './IFetchMerchantsResponse';
import StoreDispatcher from './StoreDispatcher';
import { IStoreState } from './IStoreState';
import { IMerchant } from './IMerchant';

export interface IMerchantsObjectAction extends Action<MerchantsActionType> { }
export type IMerchantsFunctionAction<T> = (dispatch: StoreDispatcher, getState?: () => IStoreState) => T;

export type FetchMerchantsAction = IMerchantsFunctionAction<Promise<IFetchMerchantsResponse | Error>>;
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

export interface IDeleteMerchantErrorAction extends IMerchantsObjectAction {
  type: MerchantsActionType.deleteError;
  error: Error;
}
export interface IDeleteMerchantSuccessAction extends IMerchantsObjectAction {
  type: MerchantsActionType.deleteSuccess;
}

export interface IDeleteMerchantBeginAction extends IMerchantsObjectAction {
  type: MerchantsActionType.deleteBegin;
}
export interface ISetMerchantsListPageSizeAction extends IMerchantsObjectAction {
  type: MerchantsActionType.setPageSize,
  data: {
    skip: number,
    take: number
  }
}
export type DeleteMerchantAction = IMerchantsFunctionAction<Promise<void>>;

export type SaveMerchantAction = IMerchantsFunctionAction<void>;
export interface ISaveMerchantBeginAction extends IMerchantsObjectAction {
  type: MerchantsActionType.saveMerchantBegin;
}
export interface ISaveMerchantSuccessAction extends IMerchantsObjectAction {
  type: MerchantsActionType.saveMerchantSuccess;
}
export interface ISaveMerchantErrorAction extends IMerchantsObjectAction {
  type: MerchantsActionType.saveMerchantError;
}

export type FetchMerchantsErrorActionFactory = (error: Error) => IFetchMerchantsErrorAction;
export type FetchMerchantsSuccessActionFactory = (data: IFetchMerchantsResponse) => IFetchMerchantsSuccessAction;
export type FetchMerchantsBeginActionFactory = () => IFetchMerchantsBeginAction;
export type FetchMerchantsActionFactory = () => FetchMerchantsAction;

export type MerchantsListPageChangeAction = IMerchantsFunctionAction<void>;
export type MerchantsListPageChangeFactory = (pageNumber: number) => MerchantsListPageChangeAction;
export type SetMerchantsListPageSizeActionFactory = (data: { skip: number, take: number }) => ISetMerchantsListPageSizeAction;

export type DeleteMerchantActionFactory = (merchant: IMerchant) => DeleteMerchantAction;
export type DeleteMerchantErrorActionFactory = (error: Error) => IDeleteMerchantErrorAction;
export type DeleteMerchantSuccessActionFactory = () => IDeleteMerchantSuccessAction;
export type DeleteMerchantBeginActionFactory = () => IDeleteMerchantBeginAction;

export type NewMerchantAction = IMerchantsFunctionAction<void>;
export type NewMerchantActionFactory = () => NewMerchantAction;

export type EditMerchantAction = IMerchantsFunctionAction<void>;
export type EditMerchantActionFactory = (merchant: IMerchant) => IMerchantsFunctionAction<void>;

export type SaveMerchantSuccessActionFactory = () => ISaveMerchantSuccessAction;
export type SaveMerchantBeginActionFactory = () => ISaveMerchantBeginAction;
export type SaveMerchantErrorActionFactory = (error: Error) => ISaveMerchantErrorAction;
export type SaveMerchantActionFactory = (merchant: IMerchant) => (dispatch: StoreDispatcher) => Promise<IMerchant>;

export type MerchantsObjectActions = IFetchMerchantsBeginAction
  | IFetchMerchantsSuccessAction
  | IFetchMerchantsErrorAction
  | ISetMerchantsListPageSizeAction
  | IDeleteMerchantErrorAction
  | IDeleteMerchantSuccessAction
  | IDeleteMerchantBeginAction
  | ISaveMerchantBeginAction
  | ISaveMerchantSuccessAction
  | ISaveMerchantErrorAction
  ;

export type MerchantsFunctionalActions = FetchMerchantsAction
  | MerchantsListPageChangeAction
  | DeleteMerchantAction
  ;

export type MerchantsAction = MerchantsObjectActions
  | MerchantsFunctionalActions
  ;
