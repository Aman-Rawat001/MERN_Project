import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // giving data onclick to the backend server using fetch-API.
  // Fetch-API returns promises that's why we are using async await.
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user; // object destructuring.
    //usign fetch api.
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // server dosn't undersatnd json so before sent the data into the server we need to stringigy it.
        name, // this means name: name, email: email, but when value and data is same then we can simply do this.
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registrations");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      // After registration is successfull then goto login page.
      history.push("/login");
    }
  };

  return (
    <>
      <section className="w-100 mx-auto ">
        <div className="text-center my-5">
          <h1 className="display-4">Register Now</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mb-5">
              <form method="POST" className="shadow  p-5">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={user.name}
                    onChange={handleInputs}
                    name="name"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    value={user.email}
                    onChange={handleInputs}
                    name="email"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    value={user.phone}
                    onChange={handleInputs}
                    name="phone"
                    type="number"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Work</label>
                  <input
                    value={user.work}
                    onChange={handleInputs}
                    name="work"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    value={user.password}
                    onChange={handleInputs}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    value={user.cpassword}
                    onChange={handleInputs}
                    name="cpassword"
                    type="password"
                    className="form-control"
                  />
                </div>

                <div className="my-2">
                  <label className="pe-4">Gender</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Female
                    </label>
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    All Details Are Correct
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={postData}
                >
                  Register
                </button>
              </form>
              <NavLink to="/login">Sign In</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
