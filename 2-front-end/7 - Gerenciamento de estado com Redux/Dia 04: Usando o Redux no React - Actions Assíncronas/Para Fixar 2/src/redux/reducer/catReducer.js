import { REQUEST_API, GET_PICTURE } from "../actions";
const INITIAL_STATE = {
  loading: false, catImg: ''
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (REQUEST_API):
      return ({ ...state, loading: true, catImg: '' });
    case (GET_PICTURE):
      return ({ ...state, loading: false, catImg: action.payload });
    default: return state;
  }
};

export default catReducer;