import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";

function App() {
  return (
    <div className="app-wrap">
      <div className="bor">
        <RouterProvider router={myRouter}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
