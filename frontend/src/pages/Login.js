import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.prevenrDefault();
  };
  return (
    <section className="heading">
      <h1>
        <FaSignInAlt /> Register
      </h1>
      <p>Login and start setting goals</p>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Login;