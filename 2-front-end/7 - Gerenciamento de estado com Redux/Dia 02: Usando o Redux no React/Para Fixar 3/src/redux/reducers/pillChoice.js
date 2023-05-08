const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case('PILL_CHOICE'):
    return {...state, id:action.payload}
    default:
      return state;
  }
};

export default selectedPill;
