import { useState } from "react";
import axios from 'axios';

export const HTTP_URL = 'http://localhost:3000/api';

const CookiePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${HTTP_URL}/login`, {
        username: username,
        password: password,
      });

      const { token } = response.data;

      document.cookie = `authToken=${token}; path=/`;
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLoginClick}>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default CookiePage;