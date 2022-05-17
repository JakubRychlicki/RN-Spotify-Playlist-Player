import * as actionsTypes from "../actions/actionsTypes";

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_TOKEN_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionsTypes.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLoading: false,
      };
    case actionsTypes.FETCH_TOKEN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
