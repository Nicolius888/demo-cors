const initialState = {
  data: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA":
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
