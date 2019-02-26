import {
  IFetchMerchantsBeginAction,
  MerchantsActionType,
  IFetchMerchantsSuccessAction,
  IFetchMerchantsErrorAction,
  FetchMerchantsActionFactory,
  FetchMerchantsBeginActionFactory,
  FetchMerchantsSuccessActionFactory,
  FetchMerchantsErrorActionFactory,
  MerchantsListPageChangeFactory,
  SetMerchantsListPageSizeActionFactory,
  DeleteMerchantActionFactory,
  DeleteMerchantSuccessActionFactory,
  DeleteMerchantBeginActionFactory,
  DeleteMerchantErrorActionFactory,
  EditMerchantActionFactory
} from '@models/IMerchantsAction';
import { IFetchMerchantsResponse } from '@models/IFetchMerchantsResponse';
import StoreDispatcher from '@models/StoreDispatcher';
import { apiFetchMerchants, apiDeleteMerchant } from '@api/merchants';
import { IStoreState } from '@models/IStoreState';
import { IMerchant } from '@models/IMerchant';

export const fetchMerchantsBeginAction: FetchMerchantsBeginActionFactory = (): IFetchMerchantsBeginAction => ({
  type: MerchantsActionType.fetchBegin
})

export const fetchMerchantsSuccessAction: FetchMerchantsSuccessActionFactory = (data: IFetchMerchantsResponse): IFetchMerchantsSuccessAction => ({
  type: MerchantsActionType.fetchSuccess,
  data
});

export const fetchFetchMerchantsErrorAction: FetchMerchantsErrorActionFactory = (error: Error): IFetchMerchantsErrorAction => ({
  type: MerchantsActionType.fetchError,
  error
});

export const setMerchantsListPagerSize: SetMerchantsListPageSizeActionFactory = (payload: { skip: number, take: number }) => ({
  type: MerchantsActionType.setPageSize,
  data: payload
});

export const fetchMerchants: FetchMerchantsActionFactory = () => async (dispatch: StoreDispatcher, getState: () => IStoreState): Promise<IFetchMerchantsResponse | Error> => {
  try {
    dispatch(fetchMerchantsBeginAction());
    const { skip, take } = getState().merchants.data;
    const data = await apiFetchMerchants({
      skip,
      take
    });
    dispatch(fetchMerchantsSuccessAction(data));
    return data;
  } catch (error) {
    dispatch(fetchFetchMerchantsErrorAction(error));
    return error;
  }
}

export const merchantsListPageChange: MerchantsListPageChangeFactory = (pageNumber: number) => (dispatch: StoreDispatcher, getState: () => IStoreState): void => {
  const take = getState().merchants.data.take;
  dispatch(setMerchantsListPagerSize({
    skip: take * (pageNumber - 1),
    take
  }));
  return dispatch(fetchMerchants())
}

export const deleteMerchantSuccessActionFactory: DeleteMerchantSuccessActionFactory = () => ({
  type: MerchantsActionType.deleteSuccess
});

export const deleteMerchantBeginActionFactory: DeleteMerchantBeginActionFactory = () => ({
  type: MerchantsActionType.deleteBegin
});

export const deleteMerchantErrorActionFactory: DeleteMerchantErrorActionFactory = (error: Error) => ({
  type: MerchantsActionType.deleteError,
  error
});

export const deleteMerchantActionFactory: DeleteMerchantActionFactory = (merchant: IMerchant) => async (dispatch: StoreDispatcher): Promise<void> => {
  try {
    dispatch(deleteMerchantBeginActionFactory());
    return await apiDeleteMerchant(merchant).then(
      res => {
        dispatch(deleteMerchantSuccessActionFactory());
        return dispatch(fetchMerchants())
      }
    )
  } catch(error) {
    return dispatch(deleteMerchantErrorActionFactory(error));
  }
};

export const editMerchantActionFactory: EditMerchantActionFactory = (merchant: IMerchant) => (dispatch: StoreDispatcher) => {
  dispatch(fetchMerchants())
}

export const addMerchantActionFactory = () => {
  return undefined;
}

export const saveMerchantActionFactory = () => async (): Promise<void> => {
  return undefined;
}
