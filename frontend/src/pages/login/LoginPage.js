import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
      setMessage('Login successful!');
      setMessage((prevMessage) => prevMessage.replace(/^.*?:/, 'Login successful:'));
    } else {
      setMessage('Invalid username or password.');
      setMessage((prevMessage) => prevMessage.replace(/^.*?:/, 'Error:'));
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className={`message ${message.startsWith('Error:') ? 'error' : 'success'}`}>
        {message}
      </div>
    </div>
  );
};

export default LoginPage;