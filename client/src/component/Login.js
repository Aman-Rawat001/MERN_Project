import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sending data in server.// and our jwt token cookie will automatically stored.
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfully");
      history.push("/");
    }
  };

  return (
    <div>
      <section className="w-100 mx-auto ">
        <div className="text-center my-5">
          <h1 className="display-4">Login</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mb-5">
              <form method="POST" className="shadow  p-5">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                  />
                </div>

                <button
                  onClick={loginUser}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
