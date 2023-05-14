import * as types from "./actionTypes";
const initState = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case types.POST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload
      };
    default:
      return state;
  }
};
export { reducer };
