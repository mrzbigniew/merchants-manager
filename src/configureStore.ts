import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import trunk from 'redux-thunk';

import { IStoreState } from '@models/IStoreState';
import StoreReducer from '@models/StoreReducer';
import MerchantsManagerReducer from '@pages/MerchantsManager/MerchantsManagerReducers';

const reducer: StoreReducer = combineReducers({
  merchants: MerchantsManagerReducer
});

const configureStore = (initialState?: IStoreState): Store => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(trunk)
  );
}

export default configureStore;
