import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [group, setGroup] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(`/room?username=${username}&group=${group}`);
  };
  return (
    <div className="container w-50 mt-3">
      <div className="form-group mt-3">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          className="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="group">Group</label>
        <select className="form-control" id="group" value={group} onChange={(e)=>setGroup(e.target.value)}>
          <option value="">Pilih</option>
          <option value="PHP">PHP</option>
          <option value="Javascript">Javascript</option>
          <option value="Golang">Golang</option>
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
