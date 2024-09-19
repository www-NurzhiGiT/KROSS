import React from "react";
import "./style/NotFound.scss";
import { Link } from "react-router-dom";
import Left from "../assets/svg/Left.svg";

function NotFound() {
  return (
    <>
      <div className="wrapper">
        <Link to="/" className="Link-to">
          <div className="l-div">
            <img src={Left} alt="image-left" className="left" />
            <p>перейти на главную страницу</p>
          </div>
        </Link>
      </div>
      <h1 className="notFound-h1">404 NotFound</h1>
    </>
  );
}

export default NotFound;
