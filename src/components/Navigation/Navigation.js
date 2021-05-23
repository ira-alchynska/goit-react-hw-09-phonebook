import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const useStyles = createUseStyles({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: 'skyblue',
  },
});

const Navigation = () => {
  const classes = useStyles();

  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Homepage
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/phonebook"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          PhoneBook
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
