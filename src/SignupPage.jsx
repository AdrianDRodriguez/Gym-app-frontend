import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container" id="signup">
      <form className="form-group text-white bg p-5 rounded" onSubmit={handleSubmit}>
        <h1 className="text-center" >Signup</h1>
        <div className="mt-3">
          <label className="form-label">Name</label>
          <input name="name" type="text" className="form-control"/>
        </div>
        <div className="mt-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control"/>
        </div>
        <div className="mt-3">
          <label className="form-label">Password</label>
          <input name="password" type="text" className="form-control"/>
        </div>
        <div className="mt-3">
          <label className="form-label">Confirm Password</label>
          <input name="password_confirmation" type="password" className="form-control"/>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-warning col-md-12">Signup</button>
        </div>
      </form>
    </div>
  );
}