import { SET_INFOS, SET_LOADING } from "../actions";
const INITIAL_STATE = {
  loading: false,
  infos: {
    name: '',
    culture: '',
    titles: [],
    aliases: []
  }
};

const gotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (SET_LOADING):
      return ({ ...state, loading: true, infos: {} });
    case (SET_INFOS):
      return ({ ...state, loading: false, infos: action.payload });
    default: return state;
  }
};

export default gotReducer;