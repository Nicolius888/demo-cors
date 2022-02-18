import React from "react";
import { useState } from "react";
import { saveData } from "../actions";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const [data, setData] = useState({ data: "" });
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setData({
      ...data,
      data: e.target.value,
    });
    console.log(data);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(saveData(data));
    console.log(data + " in landing page");
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleClick(e)}>S A V E</button>
    </div>
  );
}
