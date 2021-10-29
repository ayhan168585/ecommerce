import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
  }

  return (
    <div className="login-page">
      <form>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Şifre"
          value={user.password}
        />
        <div className="row">
          <button type="submit">Giriş yap</button>
        </div>
        <Link to="/register">Kayıt ol</Link>
      </form>
    </div>
  );
}

export default Login;
