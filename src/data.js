import React from "react";
import { Title } from "./Routes/Title";
import { Link } from "react-router-dom";
export const Avv = ({ data, setModalActive1 }) => {
  return data.map((e, i, arr) => (
    <div className="section_container">
      {" "}
      <div key={i}>{e.title}</div>{" "}
      <div className="section_content">{e.post}</div>{" "}
      <Link to="/Title">
        <button className="section_button_go" onClick={() => <Title />}>
          Перейти
        </button>
      </Link>
      <div>{}</div>
    </div>
  ));
};
