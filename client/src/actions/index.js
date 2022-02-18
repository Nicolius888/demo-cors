import axios from "axios";

export function getData() {
  return async function (dispatch) {
    console.log();
    payload = await axios.get("https://demo-cors-backend.herokuapp.com/save");
    dispatch({
      type: "SET_DATA",
      payload,
    });
  };
}
