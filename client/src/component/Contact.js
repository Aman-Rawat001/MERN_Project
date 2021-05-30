import React from "react";

export default function Contact() {
  return (
    <div>
      <section>
        <div className="text-center my-5">
          <h1 className="display-4">Contact Us</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto mb-5">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label for="exampleDataList" className="form-label">
                    Select Your City
                  </label>
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  />
                  <datalist id="datalistOptions">
                    <option value="San Francisco"></option>
                    <option value="New York"></option>
                    <option value="Seattle"></option>
                    <option value="Los Angeles"></option>
                    <option value="Chicago"></option>
                  </datalist>
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

                <div className="mb-3">
                  <label className="form-label">Example textarea</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary">
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
