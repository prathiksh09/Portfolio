import React, { useState } from "react";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(data);
  };
  return (
    <div>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Login;
