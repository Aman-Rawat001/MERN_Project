import React from "react";

export default function Home() {
  return (
    <>
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
        <h3 style={{ color: "blue" }}>W E L C O M E</h3>
        <h1>We Are The MERN Developer</h1>
      </div>
    </>
  );
}
