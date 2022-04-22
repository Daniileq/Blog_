import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tasks } from "../tasks";
export const Title = () => {
  return (
    <>
      <div>
        <Link to="/Tasks">
          <button className="button_back" onClick={() => <Tasks />}>
            Назад
          </button>
        </Link>
      </div>
    </>
  );
};
