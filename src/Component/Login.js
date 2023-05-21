import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add here logic for handling login here
  };

  return (
    <div className="container">
      <div className="login-left">
        <div className="login-header">
          <h1>Welcome to My Login Page</h1>
          <p>Please login to use the platform</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-form-content">
            <div className="form-item">
              <label htmlFor="email">Enter Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Enter password *</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-item">
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" checked />
                <label htmlFor="rememberMeCheckbox" className="checkboxLabel">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit">Sign In</button>
          </div>
          <div className="login-form-footer">
            <a href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
                width="33px"
                alt="logo instagram"
              />{' '}
              Instagram Login
            </a>
            <a href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                width="33px"
                alt="logo google"
              />{' '}
              Google Login
            </a>
          </div>
        </form>
      </div>
      <div className="login-right">
  <img
    src="https://i.ibb.co/db9SnQW/rrr2.png"
    alt="Login Page Illustration"
    width="100%"
  />
</div>
    </div>
  );
}

export default Login;
