import React, { useEffect } from "react";
import img from "./images/myimage.jpg";
import { useHistory } from "react-router-dom";

export default function About() {
  const history = useHistory();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/serverabout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include", // we are trying to get the data from backend.
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container">
        <form method="GET" className="p-5 shadow">
          <div className="row">
            <div className="col-md-4">
              <img className="profile_image" src={img} alt="image" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Aman Rawat</h5>
                <h5>Web Developer</h5>
                <p>
                  Ranking: <span> 1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      id="home-tab"
                      role="tab"
                      data-toggle="tab"
                      href="#home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      // aria-current="page"
                      id="profile-tab"
                      role="tab"
                      data-toggle="tab"
                      href="#profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btn"
              />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="#">Youtube</a>
                <br />
                <a href="#">Youtube</a>
                <br />
                <a href="#">Youtube</a>
                <br />
                <a href="#">Youtube</a>
                <br />
                <a href="#">Youtube</a>
                <br />
              </div>
            </div>
            {/* right side data toggle */}
            <div className="col-md-8 pl-5">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>123456754324567</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aman Rawat</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aman Rawat</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aman Rawat</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aman Rawat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
