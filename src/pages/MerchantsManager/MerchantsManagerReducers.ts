import { IMerchantsState } from '@models/IMerchantsState';
import { MerchantsObjectActions, MerchantsActionType } from '@models/IMerchantsAction';

const defaultState: IMerchantsState = {
  data: {
    merchants: [],
    skip: 0,
    take: 9,
    total: 0
  },
  error: undefined,
  loading: false
};

const MerchantsManagerReducer = (state: IMerchantsState = defaultState, action: MerchantsObjectActions): IMerchantsState => {
  switch (action.type) {
    case MerchantsActionType.fetchBegin:
      return {
        ...state,
        loading: true
      };
    case MerchantsActionType.fetchError:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case MerchantsActionType.fetchSuccess:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.data
      };
    case MerchantsActionType.setPageSize:
      return {
        ...state,
        data: {
          ...state.data,
          skip: action.data.skip,
          take: action.data.take
        }
      };
    default:
      return state;
  }
}

export default MerchantsManagerReducer;