import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {

  const [username, setusername] = useState() 
  const [secret, setsecret] = useState() 

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/authenticate", {username, secret})
      .then((r) => props.onAuth({...r.data, secret})) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          
          <input placeholder="Username" className="auth-input" name="username" onChange={ (e) => setusername(e.target.value) } />
          
          <input placeholder="Password" className="auth-input" type="password" name="password" onChange={ (e) => setsecret(e.target.value) } />

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;