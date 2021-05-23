import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/auth-operations';
import '../button.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    padding: '5px',
    outline: 'none',
  },
  title: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: '0',
    padding: '0',
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
  },
};

const LoginView = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    resetForm();
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.title}>Login page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Sign in</h2>
        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            className="input-email"
            type="email"
            name="email"
            value={email}
            placeholder="your@email.com"
            onChange={handleChangeEmail}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            className="input-password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit" className="button">
          Enter
        </button>
      </form>
    </div>
  );
};

export default LoginView;
