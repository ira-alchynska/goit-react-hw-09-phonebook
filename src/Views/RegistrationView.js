import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
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

const RegistrationView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    resetForm();
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      <h1 style={styles.title}>Register Page</h1>
      <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className="title-form">Registration form</h2>
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            type="name"
            name="name"
            value={name}
            onChange={handleChangeName}
            className="form-control"
            placeholder="enter your name"
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className="input"
            placeholder="your@email.com"
            autoComplete="off"
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit" className="button">
          Registration
        </button>
      </form>
    </>
  );
};

export default RegistrationView;
