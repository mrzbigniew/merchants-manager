import { Reducer } from "redux";
import { IStoreState } from './IStoreState';
import { StoreObjectAction } from './StoreActions';

type StoreReducer = Reducer<IStoreState, StoreObjectAction>;

export default StoreReducer;
