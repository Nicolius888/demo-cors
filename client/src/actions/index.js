import axios from "axios";

export function getData(payload) {
  return async function (dispatch) {
    console.log(payload);
    await axios.get("https://demo-cors-backend.herokuapp.com/save", payload);
    dispatch({
      type: "SET_DATA",
      payload,
    });
  };
}
