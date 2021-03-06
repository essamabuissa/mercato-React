import { SET_CURRENT_USER, GETPROFILE } from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    case GETPROFILE:
      return {
        ...state,
        profile: payload,
      };
    default:
      return state;
  }
};

export default reducer;
