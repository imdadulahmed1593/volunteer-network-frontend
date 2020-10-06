export const initialState = {
  user: {},
  activities: [],
};

function reducer(state, action) {
  //here the state  is referring to the initialState
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.activity],
      };
    default:
      return state;
  }
}

export default reducer;
