import React from "react";
// import { useState } from "react";
import { getData } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function LandingPage() {
  const stateData = useSelector((state) => state.data);
  // const [data, setData] = useState({ data: "" });
  const dispatch = useDispatch();

  // function handleChange(e) {
  //   e.preventDefault();
  //   setData({
  //     ...data,
  //     data: e.target.value,
  //   });
  //   console.log(data);
  // }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getData());
    // console.log(data + " in landing page");
  }

  return (
    <div>
      {/* <input type="text" onChange={(e) => handleChange(e)} /> */}
      <button onClick={(e) => handleClick(e)}>G E T</button>
      <div>{`${stateData}`}</div>
    </div>
  );
}
