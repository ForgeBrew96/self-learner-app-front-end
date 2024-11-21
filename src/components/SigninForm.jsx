import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../service/authService'; // import the authservice
import './SigninForm.css'

const SigninForm = (props) => {
  const navigate = useNavigate(); // added this for navigation purposes
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData); // TODO build signin service function
      
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <main className="signin-container shared-container">
      {/* <Link to="/">
        <button className="back-button">←</button>
      </Link> */}
      <h1 className="signin-title">Welcome<br/>Back</h1>
      <p>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Log In</button>
          <Link to="/">
            <button type="button">Back</button>
          </Link>
          <button type="button">Forgot Password?</button>
        </div>
      </form>
    </main>
  );
};

export default SigninForm;