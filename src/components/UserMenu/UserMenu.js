import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from './dolphin_PNG71318.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
});

const UserMenu = () => {
  const classes = useStyles();

  const name = useSelector(getUserName);

  const dispatch = useDispatch();

  const handleClick = () => dispatch(logout());

  return (
    <div className={classes.container}>
      <img
        src={defaultAvatar}
        alt="user"
        width="32"
        className={classes.avatar}
      />
      <span className={classes.name}>Welcome, {name}!</span>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
