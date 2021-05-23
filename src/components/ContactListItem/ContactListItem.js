import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    marginLeft: '10px',
    backgroundColor: 'skyblue',
    border: ['1px', 'solid', 'grey'],
    borderRadius: '5px',
    cursor: 'pointer',
  },
  item: {
    listStyle: 'none',
    marginBottom: '10px',
  },
});

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <span>{name}</span>: <span>{number}</span>
      <button
        className={classes.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
