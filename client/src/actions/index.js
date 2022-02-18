import axios from "axios";

export function saveData(payload) {
  return async function () {
    console.log(payload);
    await axios.post("http://localhost:3001/save", payload);
  };
}
