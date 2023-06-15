import React, { useState } from "react";

function Input() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

//   const handleChange = (e) => {
//     setPassword(e.target.value);
//   };

  return (
    <>
      <div>Input</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write Email"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form>

      <button
        disabled={password.length > 0 ? false : true}
        type="submit"
        onClick={() => console.log(`user: ${user}  password: ${password}`)}
      >
        send
      </button>
    </>
  );
}

export default Input;
