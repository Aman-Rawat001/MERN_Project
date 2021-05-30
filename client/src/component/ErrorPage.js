import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-6"
            style={{ backgroundColor: "#d1dcf8", height: "100vh" }}
          ></div>
          <div className="col-6"></div>
        </div>
      </div>
      <div
        className="center_home_text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "blue" }}>E R R O R : 4 0 4</h3>
        <h1>We Are Sorry, Page Not Found</h1>
        <NavLink to="/">Back To Homepage</NavLink>
      </div>
    </div>
  );
}
