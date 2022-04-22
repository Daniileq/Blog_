import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Title } from "./Routes/Title";
import { Tasks } from "./tasks.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Title" element={<Title />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
