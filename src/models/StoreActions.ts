import { MerchantsFunctionalActions, MerchantsObjectActions } from './IMerchantsAction';

export type StoreObjectAction = MerchantsObjectActions;
export type StoreFunctionalAction = MerchantsFunctionalActions;

type StoreAction = StoreObjectAction | StoreFunctionalAction;

export default StoreAction;