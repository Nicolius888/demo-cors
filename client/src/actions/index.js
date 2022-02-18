import axios from "axios";

export function getData() {
  return async function (dispatch) {
    let payload = await axios.get(
      "https://demo-cors-backend.herokuapp.com/save"
    );
    dispatch({
      type: "SET_DATA",
      payload,
    });
  };
}
